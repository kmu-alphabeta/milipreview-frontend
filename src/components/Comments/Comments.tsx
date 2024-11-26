import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as m from './style';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

const Comments = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState<Comment[]>([]); // 댓글 목록 상태
  const [newComment, setNewComment] = useState(''); // 새로운 댓글 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  // 댓글 가져오기
  const fetchComments = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) throw new Error('토큰이 없습니다. 로그인하세요.');

      const response = await axios.get<Comment[]>(
        `${API_BASE_URL}/comments/post/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setComments(response.data);
      setError(null);
    } catch (err: any) {
      console.error('댓글 불러오기 실패:', err);
      setError('댓글을 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  // 댓글 작성 함수
  const handleCommentSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('토큰이 없습니다. 로그인하세요.');

      await axios.post(
        `${API_BASE_URL}/comments`,
        { content: newComment, postId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setNewComment(''); // 입력 필드 초기화
      setError(null);

      // 댓글 작성 후 데이터 다시 가져오기
      fetchComments();
    } catch (err: any) {
      console.error('댓글 작성 실패:', err);
      setError('댓글 작성 중 오류가 발생했습니다.');
    }
  };

  // 댓글 삭제 함수
  const handleCommentDelete = async (commentId: number) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('토큰이 없습니다. 로그인하세요.');

      await axios.delete(`${API_BASE_URL}/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      // 댓글 삭제 후 데이터 다시 가져오기
      fetchComments();
    } catch (err: any) {
      console.error('댓글 삭제 실패:', err);
      setError('댓글 삭제 중 오류가 발생했습니다.');
    }
  };

  return (
    <m.CommentsContainer>
      <m.CommentsHeader>댓글</m.CommentsHeader>
      {loading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <>
          <m.CommentList>
            {comments.map((comment) => (
              <m.CommentItem key={comment.id}>
                <m.CommentContentWrapper>
                  <div>
                    <m.CommentAuthor>{comment.author}</m.CommentAuthor>
                    <m.CommentDate>{comment.createdAt}</m.CommentDate>
                  </div>
                  <m.CommentContent>{comment.content}</m.CommentContent>
                </m.CommentContentWrapper>
                <m.DeleteButton onClick={() => handleCommentDelete(comment.id)}>
                  삭제
                </m.DeleteButton>
              </m.CommentItem>
            ))}
          </m.CommentList>
          <m.CommentForm>
            <m.CommentInput
              type="text"
              placeholder="댓글을 입력하세요"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <m.CommentButton onClick={handleCommentSubmit}>등록</m.CommentButton>
          </m.CommentForm>
        </>
      )}
    </m.CommentsContainer>
  );
};

export default Comments;
