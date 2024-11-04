import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NewMemberPage from './pages/NewMemberPage/NewMemberPage';
import OnboardingPage from './pages/OnboardingPage/OnboardingPage';
import PredictionPage from './pages/PredictionPage/PredictionPage';
import GlobalStyle from './styles/GlobalStyles';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/newmember" element={<NewMemberPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/prediction" element={<PredictionPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
