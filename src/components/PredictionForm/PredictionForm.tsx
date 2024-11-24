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
  const [currentStep, setCurrentStep] = useState(0); // 현재 단계 (name 기준)
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({}); // 각 name별 선택된 옵션
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
        console.log('API 응답 데이터:', response.data);
        setApiData(response.data); // API 데이터를 상태에 저장
      } catch (error) {
        console.error('API 요청 실패:', error);
      }
    };

    fetchData();
  }, []);

  // 현재 단계의 name
  const currentName = apiData?.form[currentStep]?.name || '';

  // 현재 단계의 score
  const currentScore = apiData?.form[currentStep]?.score || {};

  // 옵션 선택 핸들러
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentName]: e.target.value,
    });
  };

  // 다음 버튼 핸들러
  const handleNext = () => {
    if (currentStep < apiData?.form.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // 이전 버튼 핸들러
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <m.Container>
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

      {/* 버튼 영역 */}
      <m.ButtonContainer>
        <m.Button
          onClick={handlePrev}
          disabled={currentStep === 0}
          style={{
            backgroundColor: currentStep === 0 ? '#cccccc' : '#437550',
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          이전
        </m.Button>

        <m.Button
          onClick={handleNext}
          disabled={currentStep === (apiData?.form.length || 1) - 1}
        >
          {currentStep === (apiData?.form.length || 1) - 1 ? '완료' : '다음'}
        </m.Button>
      </m.ButtonContainer>

      {/* 선택된 옵션 결과 표시 */}
      {Object.keys(selectedOptions).length > 0 && (
        <Result>
          <strong>선택된 옵션:</strong>
          <ul>
            {Object.entries(selectedOptions).map(([name, option], index) => (
              <li key={index}>
                {name}: {option}
              </li>
            ))}
          </ul>
        </Result>
      )}
    </m.Container>
  );
};

export default PredictionForm;
