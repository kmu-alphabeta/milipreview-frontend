import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as m from './style';
import styled from 'styled-components';

const Result = styled.div`
    margin-top: 20px;
    padding: 10px;
    background-color: #f1f1f1;
    border-radius: 5px;
    text-align: left;
`;

const PredictionForm = () => {
  const [apiData, setApiData] = useState<any>(null); // 전체 API 데이터
  const [currentStep, setCurrentStep] = useState(0); // 현재 단계
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({}); // 선택된 옵션들
  const [isSubmitting, setIsSubmitting] = useState(false); // 제출 상태
  const [submissionResult, setSubmissionResult] = useState<any>(null); // 제출 결과
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ0eXBlIjoia2FrYW8iLCJ2YWx1ZSI6IjM3OTg4Njg1NDgiLCJpYXQiOjE3MzI0NTQzNDMsImV4cCI6MjczMjU0MDc0M30.4jUSWixG-zOHelUCRZ1u-ZPMoDyo_KcuTOGllXC7ka0';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://milipreview-api.kookm.in/form/ARMY/GENERAL',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setApiData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('API 요청 실패:', error);
      }
    };

    fetchData();
  }, []);

  const currentName = apiData?.form[currentStep]?.name || '';
  const currentScore = apiData?.form[currentStep]?.score || {};

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentName]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentStep < apiData?.form.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // 서버에 보낼 데이터 구성
    const formData = {
      militaryType: apiData.militaryType, // 예: "육군/일반"
      form: apiData.form.map((item: any) => {
        const selectedOption = selectedOptions[item.name];

        // group 값이 null이면 제외
        const result: any = {
          name: item.name,
          type: item.type || 'radio', // 기본값은 'radio'
          score: selectedOption ? item.score[selectedOption] : null, // 숫자 값만 전송
        };

        if (item.group) {
          result.group = item.group;
        }

        return result;
      }),
    };

    console.log('전송 데이터:', JSON.stringify(formData, null, 2)); // 디버깅용 로그

    try {
      const response = await axios.post(
        'https://milipreview-api.kookm.in/form/calculate',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // 인증 토큰
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('제출 성공:', response.data); // 성공 응답 처리
      setSubmissionResult(response.data); // 결과 상태에 저장
    } catch (error: any) {
      console.error('제출 실패:', error);
      if (error.response) {
        console.error('서버 응답 메시지:', error.response.data.message); // 서버에서 보낸 에러 메시지
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <m.Container>
      {currentStep < apiData?.form.length ? (
        <>
          <m.Title>{currentName}을(를) 선택하세요</m.Title>
          <m.ProgressBar>
            <m.Progress width={((currentStep + 1) / (apiData?.form.length || 1)) * 100} />
          </m.ProgressBar>
          <m.InputSection>
            <m.DateOfBirthContainer>
              <m.Dropdown value={selectedOptions[currentName] || ''} onChange={handleOptionChange}>
                <option value="" disabled>
                  옵션을 선택하세요
                </option>
                {currentScore &&
                  Object.entries(currentScore).map(([key, value]: [string, any], index: number) => (
                    <option key={index} value={key}>
                      {key} ({value}점)
                    </option>
                  ))}
              </m.Dropdown>
              <m.DropdownLabel>옵션</m.DropdownLabel>
            </m.DateOfBirthContainer>
          </m.InputSection>
          <m.ButtonContainer>
            <m.Button onClick={handlePrev} disabled={currentStep === 0}>
              이전
            </m.Button>
            <m.Button onClick={handleNext} disabled={!selectedOptions[currentName]}>
              다음
            </m.Button>
          </m.ButtonContainer>
        </>
      ) : (
        <>
          <m.Title>모든 선택이 완료되었습니다</m.Title>
          <m.ButtonContainer>
            <m.Button onClick={handlePrev} disabled={currentStep === 0}>
              이전
            </m.Button>
            <m.Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? '제출 중...' : '제출'}
            </m.Button>
          </m.ButtonContainer>
        </>
      )}

      {/* 제출 결과 표시 */}
      {submissionResult && (
        <Result>
          <strong>제출 결과:</strong>
          <pre>{JSON.stringify(submissionResult, null, 2)}</pre>
        </Result>
      )}
    </m.Container>
  );
};

export default PredictionForm;
