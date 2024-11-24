import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as h from './style';
import Logo from '../../assets/MILI PREVIEW.svg';
import KakaoLogo from '../../assets/kakao_login_medium_narrow.png';

const MainPage: React.FC = () => {
  const [isFirst, setIsFirst] = useState(false); //첫방문 카카오 로그인
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Logo Click Event
  const navigate = useLocation();
  useEffect(() => {
    if (navigate.pathname === '/onboarding') {
      setIsFirst(true);
    }
  }, [navigate.pathname]);

  const onClick = () => {
    if (navigate.pathname === '/') {
      window.location.reload(); //홈 새로고침
    } else {
      window.location.href = '/'; // 홈으로 이동
    }
  };
  const onHistoryClick = () => {
    window.location.href = '/mypage'; // 마이페이지로 이동
  };
  const onKakaoClick = () => {
    window.location.href = '/kakao'; // 카카오 로그인 페이지로 이동
  };
  //Logout Button Click Event
  const onLogoutClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      // 로그아웃 후 추가적인 처리 (예: 세션 초기화, 페이지 이동 등)
    } else {
      setIsLoggedIn(true);
    }
  };
  return (
    <h.Container>
      <img
        onClick={onClick}
        src={Logo}
        alt="Mili Preview Logo"
        style={{ width: '95px', height: '30px', cursor: 'pointer' }}
      />
      {isFirst ? (
        <img
          src={KakaoLogo}
          alt="Kakao Login"
          onClick={onKakaoClick}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <h.ButtonContainer>
          <h.TextButton onClick={onHistoryClick}>
            예측 조회 및 관리
          </h.TextButton>
          <h.TextButton onClick={onLogoutClick}>
            {isLoggedIn ? '로그아웃' : '로그인 '}
          </h.TextButton>
          <h.TextButton>탈퇴하기</h.TextButton>
        </h.ButtonContainer>
      )}
    </h.Container>
  );
};

export default MainPage;
