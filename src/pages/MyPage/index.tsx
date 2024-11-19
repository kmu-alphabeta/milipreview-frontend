import { useState } from 'react';
import Header from '../../components/Header/index';
import Profile from '../../components/Profile/index';
import Prediction from '../../components/Prediction';
import * as m from './style';

const MyPage: React.FC = () => {
  return (
    <m.Container>
      <Header />
      <m.InnerContainer>
        <div style={{ marginBottom: '10px' }}>
          <Profile
            userData={{
              name: '박건민',
              profileImage: '',
              email: 'phk_@kookmin.ac.kr',
            }}
          />
        </div>
        히스토리 조회
        <m.HistoryContainer>
          <m.PredictionContainer>
            <Prediction />
          </m.PredictionContainer>
          <m.Graph />
        </m.HistoryContainer>
      </m.InnerContainer>
    </m.Container>
  );
};

export default MyPage;
