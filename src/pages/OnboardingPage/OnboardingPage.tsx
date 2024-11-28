import React from 'react';
import * as m from './style';
import Header from '../../components/Header/index';

const OnboardingPage: React.FC = () => {
  return (
    <>
      <m.BackgroundGradient />
      <m.BackgroundCircles>
        <m.Circle size="200px" top="10%" left="20%" opacity={0.3} />
        <m.Circle size="150px" top="40%" left="75%" opacity={0.2} />
        <m.Circle size="100px" top="60%" left="30%" opacity={0.1} />
        <m.Circle size="250px" top="80%" left="15%" opacity={0.3} />
      </m.BackgroundCircles>
      <m.Container>
        <Header />
        <m.ContentWrapper>
          <m.Text>
            군대 합격 예측
            <br />
            밀리프리뷰에서 쉽고 간편하게
          </m.Text>
        </m.ContentWrapper>
      </m.Container>
    </>
  );
};

export default OnboardingPage;
