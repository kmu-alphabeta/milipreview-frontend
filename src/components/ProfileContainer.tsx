import React, { useEffect } from 'react';
import { getKakaoUserInfo } from '../apis/auth';
import Profile from './Profile';
import useUserInfoStore from '../stores/userStore';
import useAuthStore from '../stores/authStore';

interface ProfileContainerProps {
  showEmail?: boolean; // 이메일 표시 여부
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({ showEmail }) => {
  const { userInfo, setUserInfo } = useUserInfoStore();
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (token && isLoggedIn) {
        try {
          const data = await getKakaoUserInfo(token);
          setUserInfo({
            id: data.id,
            name: data.name,
            img: data.img || '',
            email: data.email,
          });
        } catch (error) {
          console.error('사용자 정보 불러오기 실패:', error);
        }
      }
    };

    fetchData();
  }, [isLoggedIn, setUserInfo]);

  return (
    <Profile
      userData={userInfo || { name: '', img: '', email: '' }}
      showEmail={showEmail}
    />
  );
};

export default ProfileContainer;
