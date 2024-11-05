import * as p from './style';
import UserImg from '../../assets/user.svg';

interface ProfileProps {
  userData: {
    name: string;
    profileImage: string;
    email?: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  return (
    <p.Container>
      {userData.name ? (
        <>
          {userData.profileImage ? (
            <p.ProfileImage src={userData.profileImage} />
          ) : (
            <p.ProfileImage src={UserImg} />
          )}

          <p.InnerContainer>
            <p.UserName>{userData.name}님</p.UserName>
            {userData.email && <p.Email>{userData.email}</p.Email>}
          </p.InnerContainer>
        </>
      ) : (
        <p.UserName>로그인 후 이용해주세요</p.UserName>
      )}
    </p.Container>
  );
};

export default Profile;
