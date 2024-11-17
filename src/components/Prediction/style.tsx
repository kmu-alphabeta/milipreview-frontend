import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 450px;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  padding: 10px 13px;
  cursor: pointer;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2%;
`;

export const RightBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 13px;
`;

export const DateText = styled.div`
  font-size: 10px;
  color: #6c6c6c;
`;

export const ClickButton = styled.div`
  font-size: 10px;
  color: var(--green);
`;

export const Probability = styled.div`
  font-size: 15px;
`;

export const SpecialtyText = styled.div`
  font-size: 15px;
  line-height: 1.4; /* 줄 간격을 조절하여 가독성 향상 */
  word-break: break-word;
  width: 80px; /* 원하는 고정 너비 설정 */
  white-space: normal; /* 너비를 벗어나면 줄바꿈 */
`;
