import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as m from './style';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

const CommunityView: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // 게시글 목록 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  // 게시글 목록 가져오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token'); // 로컬스토리지에서 토큰 가져오기
        if (!token) {
          throw new Error('토큰이 없습니다. 로그인하세요.');
        }
        setLoading(true); // 로딩 시작
        const response = await axios.get(`${API_BASE_URL}/posts`, {
          headers: {
            Authorization: `Bearer ${token}`, // 인증 토큰 추가
            'Content-Type': 'application/json',
          },
        }); // API 호출
        setPosts(response.data); // 데이터 상태 업데이트
      } catch (err: any) {
        setError('게시글을 불러오는데 실패했습니다.'); // 에러 상태 업데이트
        console.error(err);
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchPosts();
  }, []);

  return (
    <m.Container>
      <Header />
      <m.Header>커뮤니티</m.Header>
      <m.ButtonContainer>
        <Link to="/community/write">
          <m.Button>글 작성하기</m.Button>
        </Link>
      </m.ButtonContainer>
      {loading ? (
        <m.ListTitle>로딩 중...</m.ListTitle> // 로딩 중일 때 표시
      ) : error ? (
        <m.ListTitle>{error}</m.ListTitle> // 에러 발생 시 표시
      ) : (
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
      )}
    </m.Container>
  );
};

export default CommunityView;
