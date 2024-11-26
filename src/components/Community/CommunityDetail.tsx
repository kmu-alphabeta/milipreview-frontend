import React from 'react';
import * as m from './style';
import { useParams, useNavigate } from 'react-router-dom';

const CommunityDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = {
    id: 1,
    title: '첫 번째 글',
    author: '관리자',
    content: '첫 번째 글 내용입니다.',
    createdAt: '2024-11-27',
  };

  return (
    <m.Container>
      <m.Header>{post.title}</m.Header>
      <m.Detail>
        <m.DetailAuthor>작성자: {post.author}</m.DetailAuthor>
        <m.DetailDate>작성일: {post.createdAt}</m.DetailDate>
        <m.DetailContent>{post.content}</m.DetailContent>
        <m.GoBackButton onClick={() => navigate(-1)}>뒤로가기</m.GoBackButton>
      </m.Detail>
    </m.Container>
  );
};

export default CommunityDetail;
