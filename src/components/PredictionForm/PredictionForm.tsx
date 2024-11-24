import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as m from './style';
import styled from 'styled-components';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/form/ARMY/GENERAL`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });
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

    // 군종(military)와 세부 타입(subtype) 추출 및 변환
    const militaryMapping: { [key: string]: string } = {
      육군: 'ARMY',
      해군: 'NAVY',
      공군: 'AIRFORCE',
    };

    const subtypeMapping: { [key: string]: string } = {
      일반: 'GENERAL',
      특수: 'SPECIAL',
    };

    const militaryRaw = apiData?.militaryType || '육군'; // 기본값: 육군
    const subtypeRaw = apiData?.subtype || '일반'; // 기본값: 일반

    const military = militaryMapping[militaryRaw] || 'ARMY';
    const subtype = subtypeMapping[subtypeRaw] || 'GENERAL';

    const formData = {
      militaryType: apiData?.militaryType || 'ARMY',
      form: apiData.form.map((item: any) => {
        const selectedOption = selectedOptions[item.name];
        const result: any = {
          name: item.name,
          type: item.type || 'radio',
          score: selectedOption ? item.score[selectedOption] : null,
        };

        if (item.group) {
          result.group = item.group;
        }

        return result;
      }),
    };

    // 동적 URL 생성
    const postUrl = `${API_BASE_URL}/form/calculate/${military}/${subtype}`;

    console.log('전송 데이터:', JSON.stringify(formData, null, 2));
    console.log('POST 요청 URL:', postUrl);

    try {
      const response = await axios.post(postUrl, formData, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('제출 성공:', response.data);
      setSubmissionResult(response.data);
    } catch (error: any) {
      console.error('제출 실패:', error);
      if (error.response) {
        console.error('서버 응답 메시지:', error.response.data.message);
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
    </m.Container>
  );
};

export default PredictionForm;
