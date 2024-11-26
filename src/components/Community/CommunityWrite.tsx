import React, { useState } from 'react';
import * as m from './style';
import { useNavigate } from 'react-router-dom';

const CommunityWrite: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('제목:', title);
    console.log('내용:', content);
    navigate('/community');
  };

  return (
    <m.Container>
      <m.Header>글 작성하기</m.Header>
      <m.Form>
        <m.Input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <m.TextArea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <m.Button onClick={handleSubmit}>작성 완료</m.Button>
      </m.Form>
    </m.Container>
  );
};

export default CommunityWrite;
