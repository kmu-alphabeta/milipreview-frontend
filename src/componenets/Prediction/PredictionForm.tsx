import React, { useState } from 'react';
import styled from 'styled-components';
import BirthDate from './BirthDate';
import Education from './Education';
import Qualifications from './Qualifications';
import AdditionalPoints from './AdditionalPoints';
import * as m from './style'; // 스타일을 동일하게 가져오기

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const PredictionForm = () => {
  const [step, setStep] = useState(1);

  const renderComponent = () => {
    switch (step) {
      case 1:
        return <BirthDate />;
      case 2:
        return <Education />;
      case 3:
        return <Qualifications />;
      case 4:
        return <AdditionalPoints />;
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      {renderComponent()}
      <m.ButtonContainer>
        {/* 이전 버튼 */}
        <m.Button
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
          style={{
            backgroundColor: step === 1 ? '#cccccc' : '#437550',
            cursor: step === 1 ? 'not-allowed' : 'pointer',
          }}
        >
          이전
        </m.Button>

        {/* 다음 버튼 */}
        <m.Button
          onClick={() => setStep(step + 1)}
          disabled={step === 4}
        >
          {step === 4 ? '시작' : '다음'}
        </m.Button>
      </m.ButtonContainer>
    </PageContainer>
  );
};

export default PredictionForm;
