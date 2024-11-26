import React, { useEffect, useState } from 'react';
import * as m from './style';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Comments from '../Comments/Comments';
import Header from '../Header';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: string;
}

const CommunityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // id를 URL에서 가져옴
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null); // 게시글 상태 관리
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem('token'); // 로컬스토리지에서 토큰 가져오기
        if (!token) {
          throw new Error('토큰이 없습니다. 로그인하세요.');
        }
        const response = await axios.get<Post>(`${API_BASE_URL}/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        setPost(response.data);
        setError(null);
      } catch (error: any) {
        setError('게시글을 불러오는 중 오류가 발생했습니다.');
        console.error('Error fetching post details:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token'); // 로컬스토리지에서 토큰 가져오기
      if (!token) {
        throw new Error('토큰이 없습니다. 로그인하세요.');
      }
      await axios.delete(`${API_BASE_URL}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      alert('게시글이 삭제되었습니다.');
      navigate('/community'); // 삭제 후 커뮤니티 목록 페이지로 이동
    } catch (error: any) {
      console.error('게시글 작성자만 삭제할 수 있습니다.:', error);
      alert('게시글 작성자만 삭제할 수 있습니다.');
    }
  };

  if (error) {
    return (
      <m.Container>
        <m.Header>오류</m.Header>
        <m.DetailContent>{error}</m.DetailContent>
        <m.GoBackButton onClick={() => navigate(-1)}>뒤로가기</m.GoBackButton>
      </m.Container>
    );
  }

  if (!post) {
    return (
      <m.Container>
        <m.Header>로딩 중...</m.Header>
      </m.Container>
    );
  }

  return (
    <m.Container>
      <Header />
      <m.Header>{post.title}</m.Header>
      <m.Detail>
        <m.DetailAuthor>작성자: {post.author}</m.DetailAuthor>
        <m.DetailDate>작성일: {post.createdAt}</m.DetailDate>
        <m.DetailContent>{post.content}</m.DetailContent>
        <m.ButtonContainer>
          <m.GoBackButton onClick={() => navigate(-1)}>뒤로가기</m.GoBackButton>
          <m.DeleteButton onClick={handleDelete}>삭제</m.DeleteButton>
        </m.ButtonContainer>
      </m.Detail>
      <Comments postId={post.id} />
    </m.Container>
  );
};

export default CommunityDetail;
