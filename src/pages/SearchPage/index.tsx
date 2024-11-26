import React, { useState } from 'react';
import * as e from './style';
import { askGPT } from '../../apis/gpt';

const SearchPage: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskGPT = async () => {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const response = await askGPT(question);
      setAnswer(response);
    } catch (error: any) {
      setAnswer(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <e.Container>
      <e.Title>둘러보기</e.Title>
      <e.SubTitle>궁금한 점을 물어보세요!</e.SubTitle>
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
    </e.Container>
  );
};

export default SearchPage;
