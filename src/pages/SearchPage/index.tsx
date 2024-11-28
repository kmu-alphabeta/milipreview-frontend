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
            <>
              <e.Placeholder>
                아직 자신에게 맞는 군종을 정하지 못했다면?
              </e.Placeholder>
              <e.Placeholder>
                ex: "군대를 가고 싶은데 추천해줘. 나는 어릴때부터 바다를
                좋아했고 운전하는것을 좋아해."
              </e.Placeholder>
              <e.Placeholder>훈련소에 대해 궁금한 점이 있다면?</e.Placeholder>
              <e.Placeholder>
                ex: "해군의 수송이나 기관 모집안내를 볼 수 있을까?"
              </e.Placeholder>
            </>
          )}
        </e.AnswerBox>
      </e.InnerContainer>
    </e.Container>
  );
};

export default SearchPage;
