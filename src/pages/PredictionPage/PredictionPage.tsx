import React from 'react';
import * as m from './style';
import Header from '../../components/Header';
import NewMemberForm from '../../components/Prediction/PredictionForm';

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
