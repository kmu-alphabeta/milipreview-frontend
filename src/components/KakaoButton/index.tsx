import KakaoLogo from '../../assets/kakao_login_medium_narrow.png';

const Kakao: React.FC = () => {
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <img
      src={KakaoLogo}
      alt="Kakao Login"
      onClick={handleLogin}
      style={{ marginLeft: 'auto', cursor: 'pointer' }}
    />
  );
};
export default Kakao;
