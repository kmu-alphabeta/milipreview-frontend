import { useNavigate, useLocation } from 'react-router-dom';
import * as h from './style';
import Logo from '../../assets/MILI PREVIEW.svg';
import Kakao from '../KakaoButton/index';
import useAuthStore from '../../stores/authStore'; // Zustand 스토어 import

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuthStore(); // 로그인 상태와 액션 가져오기
  const navigate = useLocation();
  const navigateTo = useNavigate();
  console.log(isLoggedIn);
  const isFirst = navigate.pathname === '/'; // 첫 방문 여부

  // 로고 클릭 이벤트
  const onClick = () => {
    if (navigate.pathname === '/main') {
      window.location.reload(); // 홈 새로고침
    } else {
      window.location.href = '/main'; // 홈으로 이동
    }
  };

  // 마이페이지 이동
  const onHistoryClick = () => {
    window.location.href = '/mypage';
  };
  const onCommunityClick = () => {
    window.location.href = '/community';
  };
  const onSerachClick = () => {
    window.location.href = '/search';
  };

  // 로그아웃 버튼 클릭
  const onLogoutClick = () => {
    if (isLoggedIn) {
      logout(); // Zustand에서
      console.log(isLoggedIn);
      navigateTo('/'); // 첫 화면으로 이동
    }
  };

  return (
    <h.Container>
      {!isFirst && (
        <img
          onClick={onClick}
          src={Logo}
          alt="Mili Preview Logo"
          style={{ width: '95px', height: '30px', cursor: 'pointer' }}
        />
      )}
      {isFirst ? (
        <Kakao />
      ) : (
        <h.ButtonContainer>
          <h.TextButton onClick={onHistoryClick}>
            예측 조회 및 관리
          </h.TextButton>
          <h.TextButton onClick={onCommunityClick}>커뮤니티</h.TextButton>
          <h.TextButton onClick={onSerachClick}>둘러보기</h.TextButton>
          <h.TextButton onClick={onLogoutClick}>
            {isLoggedIn ? '로그아웃' : '로그인'}
          </h.TextButton>
        </h.ButtonContainer>
      )}
    </h.Container>
  );
};

export default Header;
