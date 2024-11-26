import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainPage from './pages/MainPage';
import OnboardingPage from './pages/OnboardingPage/OnboardingPage';
import PredictionPage from './pages/PredictionPage/PredictionPage';
import GlobalStyle from './styles/GlobalStyles';
import KakaoAuth from './components/KakaoAuth';
import MyPage from './pages/MyPage';
import './App.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/prediction" element={<PredictionPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/oauth" element={<KakaoAuth />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
