import React, { useEffect, useState } from 'react';
import * as m from './style';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';
const API_TOKEN = process.env.REACT_APP_API_TOKEN || '';

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
        const response = await axios.get<Post>(`${API_BASE_URL}/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
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
