import React, { useState } from 'react';
import * as m from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

const CommunityWrite: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token'); // 로컬스토리지에서 토큰 가져오기
      if (!token) {
        throw new Error('토큰이 없습니다. 로그인하세요.');
      }
      console.log('API 요청 시작:', { title, content });
      console.log('API_BASE_URL:', API_BASE_URL);

      const response = await axios.post(
        `${API_BASE_URL}/posts`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('작성 성공:', response.data); // 생성된 게시글 ID 확인
      setError(null);
      navigate('/community'); // 작성 후 커뮤니티 페이지로 이동
    } catch (error: any) {
      console.error('작성 실패:', error);
      console.error('에러 응답:', error.response?.data || error.message);
      setError('게시글 작성 중 오류가 발생했습니다.');
    }
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
        <m.Button type="button" onClick={handleSubmit}>
          작성 완료
        </m.Button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </m.Form>
    </m.Container>
  );
};

export default CommunityWrite;
