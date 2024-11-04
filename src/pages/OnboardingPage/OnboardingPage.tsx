import React from 'react';
import * as m from './style';
import Header from '../../componenets/Header/index';

const HEADER_HEIGHT = 80; // 헤더 높이 설정

const OnboardingPage: React.FC = () => {
  return (
    <m.Container>
      <Header />
      <m.ContentWrapper>
        <m.LeftContent>
          <m.Title>온보딩 페이지</m.Title>
          <m.Text>이 페이지에서 온보딩 정보를 확인하세요.</m.Text>
        </m.LeftContent>
      </m.ContentWrapper>
      <m.RightContent>
        <m.Column>
          {Array.from({ length: 5 }).map((_, index) => (
            <m.AnimatedBox key={index} delay={index * 2} />
          ))}
        </m.Column>
        <m.Column>
          {Array.from({ length: 5 }).map((_, index) => (
            <m.AnimatedBox key={index} delay={index * 2 + 1} />
          ))}
        </m.Column>
      </m.RightContent>
    </m.Container>
  );
};

export default OnboardingPage;
