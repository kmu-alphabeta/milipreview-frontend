import { useNavigate } from 'react-router-dom';
import * as p from './style';
import UserImg from '../../assets/user.svg';

interface ProfileProps {
  userData: {
    name: string;
    img: string;
    email: string | null;
  };
  showEmail?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ userData, showEmail }) => {
  const navigate = useNavigate();
  console.log('userData', userData);
  const goToMyPage = () => {
    navigate('/mypage');
  };

  return (
    <p.Container>
      {userData.name ? (
        <>
          {userData.img ? (
            <p.ProfileImage src={userData.img} />
          ) : (
            <p.ProfileImage src={UserImg} />
          )}

          <p.InnerContainer onClick={goToMyPage}>
            <p.UserName>{userData.name}님</p.UserName>
            {showEmail && <p.Email>{userData.email}</p.Email>}
          </p.InnerContainer>
        </>
      ) : (
        <p.UserName>로그인 후 이용해주세요</p.UserName>
      )}
    </p.Container>
  );
};

export default Profile;
