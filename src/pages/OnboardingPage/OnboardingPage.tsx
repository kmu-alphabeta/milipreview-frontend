import React from 'react';
import * as m from './style';
import Header from '../../components/Header/index';

const OnboardingPage: React.FC = () => {
  return (
    <m.Container>
      <Header />
      <m.ContentWrapper>
        <m.Text>
          군대 합격 예측<br />
          밀리프리뷰에서 쉽고 간편하게
        </m.Text>
      </m.ContentWrapper>
    </m.Container>
  );
};

export default OnboardingPage;
