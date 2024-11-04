import { useLocation } from 'react-router-dom';
import * as h from './style';
import Logo from '../../assets/MILI PREVIEW.svg';
const Header: React.FC = () => {
  const navigate = useLocation();
  const onClick = () => {
    if (navigate.pathname === '/') {
      window.location.reload(); //홈 새로고침
    } else {
      window.location.href = '/'; // 홈으로 이동
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
      <h.ButtonContainer>
        <h.TextButton>예측 조회 및 관리</h.TextButton>
        <h.TextButton>Logout</h.TextButton>
      </h.ButtonContainer>
    </h.Container>
  );
};

export default Header;
