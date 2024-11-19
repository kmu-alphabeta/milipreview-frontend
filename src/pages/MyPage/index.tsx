import { useState } from 'react';
import ProfilePage from '../ProfilePage/index';
import Header from '../../components/Header/index';
import Profile from '../../components/Profile/index';
import Prediction from '../../components/Prediction';
import Tab from '../../components/Tab';
import * as m from './style';

const HistoryPage = () => (
  <m.HistoryContainer>
    <m.PredictionContainer>
      <Prediction />
    </m.PredictionContainer>
    <m.Graph />
  </m.HistoryContainer>
);

const MyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('히스토리 조회');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
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
        <Tab
          tabs={['히스토리 조회', '공통 서식 수정']}
          onTabChange={handleTabChange}
        />
        {activeTab === '히스토리 조회' && <HistoryPage />}
        {activeTab === '공통 서식 수정' && <ProfilePage />}
      </m.InnerContainer>
    </m.Container>
  );
};

export default MyPage;
