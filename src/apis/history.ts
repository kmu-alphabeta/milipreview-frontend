import axios from 'axios';

const Base_URL = process.env.REACT_APP_API_BASE_URL;

export const getHistory = async (token: string): Promise<any> => {
  console.log('1:', token);
  const res = await axios.get(`${Base_URL}/history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('서버데이터:', res.data);
  return res.data;
};
