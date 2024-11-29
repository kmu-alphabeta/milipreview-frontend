import axios from 'axios';

const Base_URL = process.env.REACT_APP_API_BASE_URL;

// 카카오 로그인 API 호출 함수
export const fetchKakaoToken = async (code: string): Promise<any> => {
  const res = await axios.post(
    `${Base_URL}/auth/login`,
    { type: 'kakao', code },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
  return res.data;
};

export const getKakaoUserInfo = async (token: string): Promise<any> => {
  const res = await axios.get(`${Base_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('서버데이터:', res.data);
  return res.data;
};
