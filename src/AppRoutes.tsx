import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OnboardingPage from './pages/OnboardingPage/OnboardingPage';
import PredictionPage from './pages/PredictionPage/PredictionPage';
import CommunityView from './pages/Community/CommunityView';
import CommunityWrite from './pages/Community/CommunityWrite';
import CommunityDetail from './pages/Community/CommunityDetail';
import MyPage from './pages/MyPage';
import KakaoAuth from './components/KakaoAuth';
import SearchPage from './pages/SearchPage';
import PredictionResultPage from './pages/PredictionResultPage/PredictionResultPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/prediction" element={<PredictionPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/community" element={<CommunityView />} />
      <Route path="/community/write" element={<CommunityWrite />} />
      <Route path="/community/detail/:id" element={<CommunityDetail />} />
      <Route path="/oauth" element={<KakaoAuth />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/predictionresult/:id" element={<PredictionResultPage />} />
    </Routes>
  );
};
export default AppRoutes;
