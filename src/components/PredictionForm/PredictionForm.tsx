import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as m from './style';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

interface PredictionFormProps {
  category: string | null;
  baseCategory: string | null;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ category, baseCategory }) => {
  const [apiData, setApiData] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate(); // useNavigate 추가

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
      form: apiData.form.map((item: any) => {
        const selectedOption = selectedOptions[item.name];
        const score = selectedOption ? item.score[selectedOption] : 0; // 선택된 점수, 없으면 0

        const group = (item.group || []).map((groupItem: any) => ({
          name: groupItem.name,
          priority: groupItem.priority,
          limit: groupItem.limit,
        }));

        return {
          group: group.length > 0 ? group : [], // group이 없는 경우 빈 배열로 설정
          score: score, // score 값 설정
        };
      }),
    };
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const formData = prepareFormData(apiData, selectedOptions); // 양식 변환

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
      console.log('성공:', response.data);

      navigate('/predictionresult', { state: { result: response.data } });
    } catch (error: any) {
      setError('제출 실패');
      console.error('제출 실패:', error);
      console.log('전송된 데이터:', formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionResult) {
    return (
      <m.Container>
        <m.Title>제출이 완료되었습니다.</m.Title>
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
                  {currentName}
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
