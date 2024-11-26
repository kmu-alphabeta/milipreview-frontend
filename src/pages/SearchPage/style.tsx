import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  color: #555;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const AnswerBox = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  min-height: 100px;
`;

export const Answer = styled.div`
  font-size: 1rem;
  color: #333;
`;

export const Placeholder = styled.div`
  font-size: 1rem;
  color: #999;
`;
