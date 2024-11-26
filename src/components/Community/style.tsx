import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0% 16%;
    margin-bottom: 20px;
    gap: 15px;
`;

export const Header = styled.h1`
  font-size: 24px;
  color: var(--green);
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--green);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--dark-green);
  }
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 20px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px 0px #e4e4e4;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const ListTitle = styled.h2`
  font-size: 18px;
  color: black;
`;

export const ListAuthor = styled.p`
  font-size: 14px;
  color: gray;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  min-height: 200px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const DetailAuthor = styled.p`
  font-size: 16px;
  color: gray;
`;

export const DetailDate = styled.p`
  font-size: 14px;
  color: lightgray;
`;

export const DetailContent = styled.div`
  font-size: 16px;
  color: black;
  line-height: 1.5;
`;
