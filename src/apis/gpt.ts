import axios from 'axios';

const Base_URL = process.env.REACT_APP_API_BASE_URL;

export const askGPT = async (
  token: string,
  question: string,
): Promise<string> => {
  try {
    const res = await axios.post(
      `${Base_URL}/chat`,
      { chat: question },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log('OpenAI API 호출 결과:', res.data);
    // 여기서 res.data.choices[0].text가 텍스트를 포함한다고 가정
    return res.data.response;
  } catch (error) {
    console.error('OpenAI API 호출 중 오류 발생:', error);
    throw new Error('답변을 가져오지 못했습니다. 다시 시도해주세요.');
  }
};
