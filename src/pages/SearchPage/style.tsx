import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0% 16%;
  margin-bottom: 20px;
  gap: 15px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-size: 1.4rem;
  text-align: center;
  color: #666;
  margin-bottom: 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 600px;
  height: 400px;
  max-width: 800px; /* 컨테이너 최대 너비 설정 */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #f4f6fa; /* 은은한 배경색 추가 */
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border 0.3s;

  &:focus {
    border-color: var(--green);
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: var(--green);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: #12563b;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const AnswerBox = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  height: 100%;
  min-height: 120px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Answer = styled.div`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.5;
`;

export const Placeholder = styled.div`
  font-size: 1.1rem;
  color: #bbb;
  text-align: center;
  margin-bottom: 10px;
`;

export const Footer = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #888;
  text-align: center;
`;
