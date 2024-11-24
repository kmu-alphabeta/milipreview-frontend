import React from 'react';
import * as m from './style';
import Header from '../../componenets/Header';
import NewMemberForm from '../../componenets/Prediction/PredictionForm';

const PredictionPage: React.FC = () => {
  return (
    <m.Background>
      <m.Container>
        <Header />
        <NewMemberForm/>
      </m.Container>
    </m.Background>
  );
};

export default PredictionPage;
