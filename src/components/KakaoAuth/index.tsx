import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { fetchKakaoToken } from '../../apis/auth';
import useAuthStore from '../../stores/authStore';
import Spinner from '../Spinner';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const OAuth = searchParams.get('code'); // 인가 코드 추출
  console.log('인가코드:', OAuth);
  const { login } = useAuthStore();

  const tokenMutation = useMutation(fetchKakaoToken, {
    onSuccess: (data) => {
      console.log('Login Success');
      console.log('onSuccess data:', data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        login(data.token);
      } else {
        console.error('Token이 없습니다:', data);
      }
    },

    onError: (error) => {
      console.error('Failed to get token:', error); // 에러 처리
    },
  });

  // code가 있을 경우 바로 mutation 호출
  React.useEffect(() => {
    if (OAuth) {
      tokenMutation.mutate(OAuth); // React Query 사용
      navigate('/');
    } else {
      console.error('Authorization code not found');
    }
  }, [OAuth]);

  return <Spinner />;
};

export default Auth;
