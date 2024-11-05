import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  padding: 10px 13px;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2%;
`;

export const RightBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const DateText = styled.div`
  font-size: 10px;
  color: #6c6c6c;
`;
