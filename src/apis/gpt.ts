import axios from 'axios';

const Base_URL = process.env.REACT_APP_API_BASE_URL;

export const askGPT = async (token: string): Promise<string> => {
  try {
    const response = await axios.post(`${Base_URL}/chat`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('OpenAI API 호출 중 오류 발생:', error);
    throw new Error('답변을 가져오지 못했습니다. 다시 시도해주세요.');
  }
};
