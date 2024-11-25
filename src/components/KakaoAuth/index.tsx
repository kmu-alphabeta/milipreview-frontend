import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { fetchKakaoToken } from '../../apis/auth';
const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const OAuth = searchParams.get('code'); // 인가 코드 추출
  console.log('인가코드:', OAuth);

  const tokenMutation = useMutation(fetchKakaoToken, {
    onSuccess: (data) => {
      console.log('onSuccess data:', data);
      if (data.token) {
        localStorage.setItem('token', JSON.stringify(data.token));
        console.log('Token:', data.token);
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
    } else {
      console.error('Authorization code not found');
    }
  }, [OAuth]);

  return <div>잠시만 기다려 주세요!</div>;
};

export default Auth;
