import React from 'react';
import * as m from './style';
import { Link } from 'react-router-dom';

const CommunityView: React.FC = () => {
  const posts = [
    { id: 1, title: '첫 번째 글', author: '관리자', content: '첫 번째 글 내용입니다.' },
    { id: 2, title: '두 번째 글', author: '사용자', content: '두 번째 글 내용입니다.' },
  ];

  return (
    <m.Container>
      <m.Header>커뮤니티</m.Header>
      <m.ButtonContainer>
        <Link to="/community/write">
          <m.Button>글 작성하기</m.Button>
        </Link>
      </m.ButtonContainer>
      <m.List>
        {posts.map((post) => (
          <m.ListItem key={post.id}>
            <Link to={`/community/detail/${post.id}`}>
              <m.ListTitle>{post.title}</m.ListTitle>
              <m.ListAuthor>작성자: {post.author}</m.ListAuthor>
            </Link>
          </m.ListItem>
        ))}
      </m.List>
    </m.Container>
  );
};

export default CommunityView;
