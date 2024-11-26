import styled from 'styled-components';

export const CommentsContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-top: 1px solid #e4e4e4;
`;

export const CommentsHeader = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CommentItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e4e4e4;

    &:last-child {
        border-bottom: none;
    }
`;

export const CommentAuthor = styled.span`
    font-weight: bold;
    margin-right: 10px;
    color: #30553a;
`;

export const CommentDate = styled.span`
    font-size: 14px;
    color: #555;
`;

export const CommentContent = styled.p`
    margin: 5px 0 0;
    font-size: 16px;
    line-height: 1.5;
`;

export const CommentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


export const CommentForm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const CommentInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: var(--green);
    box-shadow: 0 0 4px rgba(0, 128, 0, 0.4);
  }
`;

export const CommentButton = styled.button`
  padding: 10px 20px;
  background-color: var(--green);
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2d4f36;
  }
`;

export const DeleteButton = styled.button`
    background: none;
    color: #ff4d4f;
    border: none;
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        color: #d9363e;
    }
`;
