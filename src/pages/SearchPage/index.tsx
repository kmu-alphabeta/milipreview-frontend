import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Header from '../../components/Header';
import * as e from './style';
import { askGPT } from '../../apis/gpt';
import useAuthStore from '../../stores/authStore'; // Assuming your token is stored here

const SearchPage: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const { accessToken } = useAuthStore(); // Get the token from your auth store

  const { mutate } = useMutation(
    (question: string) => {
      if (accessToken) {
        return askGPT(accessToken, question);
      } else {
        throw new Error('Access token is null');
      }
    }, // Pass token and question to askGPT
    {
      onSuccess: (response) => {
        setAnswer(response); // Set the answer from the response
        setLoading(false);
      },
      onError: (error: any) => {
        setAnswer(error.message);
        setLoading(false);
      },
    },
  );

  const handleAskGPT = () => {
    if (!question.trim()) return;

    setLoading(true);
    mutate(question); // Use react-query's mutate function to call askGPT
  };

  return (
    <e.Container>
      <Header />
      <e.Title>둘러보기</e.Title>
      <e.SubTitle>
        훈련소 및 군종 정보 등 궁금한 점을 물어보세요!
        <br />
      </e.SubTitle>
      <e.InnerContainer>
        <e.InputContainer>
          <e.Input
            type="text"
            placeholder="여기에 질문을 입력하세요..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <e.Button onClick={handleAskGPT} disabled={loading}>
            {loading ? '질문 중...' : '질문하기'}
          </e.Button>
        </e.InputContainer>
        <e.AnswerBox>
          {answer ? (
            <e.Answer>{answer}</e.Answer>
          ) : (
            <e.Placeholder>답변이 이곳에 표시됩니다.</e.Placeholder>
          )}
        </e.AnswerBox>
      </e.InnerContainer>
    </e.Container>
  );
};

export default SearchPage;
