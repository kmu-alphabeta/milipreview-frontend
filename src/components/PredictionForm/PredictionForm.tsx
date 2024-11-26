import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as m from './style';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

interface PredictionFormProps {
  category: string | null;
  baseCategory: string | null; // 동적으로 전달받을 상위 카테고리 (영어)
}

const PredictionForm: React.FC<PredictionFormProps> = ({ category, baseCategory }) => {
  const [apiData, setApiData] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!category || !baseCategory) {
        setError('카테고리가 유효하지 않습니다.');
        return;
      }

      try {
        const token = localStorage.getItem('token'); // 로컬스토리지에서 토큰 가져오기
        if (!token) {
          throw new Error('토큰이 없습니다. 로그인하세요.');
        }
        const response = await axios.get(
          `${API_BASE_URL}/form/${baseCategory}/${category}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setApiData(response.data);
        console.log(`${API_BASE_URL}/form/${baseCategory}/${category}`);
        console.log(response.data);
        setError(null);
      } catch (error: any) {
        setError('데이터 로드 실패');
        console.error('API 요청 실패:', error);
        console.log(`${API_BASE_URL}/form/${baseCategory}/${category}`);
      }
    };

    fetchData();
  }, [category, baseCategory]);

  const currentName = apiData?.form[currentStep]?.name || '';
  const currentScore = apiData?.form[currentStep]?.score || {};

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentName]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentStep < apiData?.form.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const prepareFormData = (apiData: any, selectedOptions: { [key: string]: string }) => {
    return {
      militaryType: apiData.militaryType || 'UNKNOWN', // militaryType 포함
      form: apiData.form.map((item: any) => {
        const selectedOption = selectedOptions[item.name]; // 사용자가 선택한 옵션
        const score = selectedOption ? item.score[selectedOption] : null; // 선택된 점수

        // group 데이터를 변환
        const group = (item.group || []).map((groupItem: any) => ({
          name: groupItem.name,
          priority: groupItem.priority,
          limit: groupItem.limit,
        }));

        // POST 데이터 구조에 맞게 변환
        return {
          name: item.name,
          type: item.type,
          group: group.length > 0 ? group : undefined, // group이 없으면 undefined
          score: score !== null ? { [selectedOption]: score } : undefined, // score가 있으면 key-value 형태로 전달
        };
      }),
    };
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // prepareFormData 호출
    const formData = prepareFormData(apiData, selectedOptions);

    try {
      const token = localStorage.getItem('token'); // 로컬스토리지에서 토큰 가져오기
      if (!token) {
        throw new Error('토큰이 없습니다. 로그인하세요.');
      }
      const response = await axios.post(
        `${API_BASE_URL}/form/calculate/${baseCategory}/${category}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setSubmissionResult(response.data);
      console.log('전송된 데이터:', formData);
      console.log('성공');
    } catch (error: any) {
      setError('제출 실패');
      console.error('제출 실패:', error);
      console.log('전송된 데이터:', formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionResult) {
    // 제출 결과 처리 (예: 결과 페이지로 이동하거나 결과 표시)
    return (
      <m.Container>
        <m.Title>제출이 완료되었습니다.</m.Title>
        {/* 제출 결과를 표시하거나 다른 처리를 할 수 있습니다 */}
      </m.Container>
    );
  }

  return (
    <m.Container>
      {error ? (
        <m.Title>{error}</m.Title>
      ) : !apiData ? (
        <m.Title>로딩 중...</m.Title>
      ) : (
        <>
          <m.Title>{currentName}을(를) 선택하세요</m.Title>
          <m.ProgressBar>
            <m.Progress width={((currentStep + 1) / apiData.form.length) * 100} />
          </m.ProgressBar>
          <m.InputSection>
            <m.DateOfBirthContainer>
              <m.Dropdown
                value={selectedOptions[currentName] || ''}
                onChange={handleOptionChange}
              >
                <option value="" disabled>
                  옵션을 선택하세요
                </option>
                {currentScore &&
                  Object.entries(currentScore).map(([key, value]) => (
                    <option key={key} value={key}>
                      {`${key} (${value}점)`}
                    </option>
                  ))}
              </m.Dropdown>
            </m.DateOfBirthContainer>
          </m.InputSection>
          <m.ButtonContainer>
            <m.Button onClick={handlePrev} disabled={currentStep === 0}>
              이전
            </m.Button>
            {currentStep < apiData.form.length - 1 ? (
              <m.Button onClick={handleNext} disabled={!selectedOptions[currentName]}>
                다음
              </m.Button>
            ) : (
              <m.Button
                onClick={handleSubmit}
                disabled={!selectedOptions[currentName] || isSubmitting}
              >
                {isSubmitting ? '제출 중...' : '제출'}
              </m.Button>
            )}
          </m.ButtonContainer>
        </>
      )}
    </m.Container>
  );
};

export default PredictionForm;
