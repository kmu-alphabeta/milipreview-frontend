import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OnboardingPage from './pages/OnboardingPage/OnboardingPage';
import PredictionPage from './pages/PredictionPage/PredictionPage';
import CommunityView from './components/Community/CommunityView';
import CommunityWrite from './components/Community/CommunityWrite';
import CommunityDetail from './components/Community/CommunityDetail';
import GlobalStyle from './styles/GlobalStyles';
import './App.css';
import MyPage from './pages/MyPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/community" element={<CommunityView />} />
        <Route path="/community/write" element={<CommunityWrite />} />
        <Route path="/community/detail/:id" element={<CommunityDetail />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
