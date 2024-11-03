import * as h from './style';
import Logo from '../../assets/MILI PREVIEW.svg';
const MainPage: React.FC = () => {
  return (
    <h.Container>
      <img
        src={Logo}
        alt="Mili Preview Logo"
        style={{ width: '95px', height: '30px' }}
      />
      <h.ButtonContainer>
        <h.TextButton>예측 조회 및 관리</h.TextButton>
        <h.TextButton>Logout</h.TextButton>
      </h.ButtonContainer>
    </h.Container>
  );
};

export default MainPage;
