import React from 'react';
import * as m from './style';
import Header from '../../componenets/Header/index';

const PredictionPage: React.FC = () => {
  return (
    <m.Container>
      <Header />
      <m.InnerContainer>
        <m.PredictionBox>
          <m.Title>예측 페이지</m.Title>
          <m.Text>여기에서 예측 데이터를 확인하고 관리하세요.</m.Text>
        </m.PredictionBox>
      </m.InnerContainer>
    </m.Container>
  );
};

export default PredictionPage;
