import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0% 16%;
  gap: 15px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: center;
  width: 100%;
  align-items: stretch;
  padding: 40px 30px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e4e4e4;
`;

export const HistoryContainer = styled.div`
  display: flex;
  gap: 17px;
`;

export const Graph = styled.div`
  border: 1px solid #e4e4e4;
  width: 100%;
  height: 450px;
`;
export const PredictionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 레이아웃 */
  gap: 20px;
  margin: 20px 0;
  height: 450px;
  margin-top: 0px;
  > div:last-child {
    grid-column: span 2;
  }
`;

export const PredictionCard = styled.div<{ isPassed?: boolean }>`
  background-color: ${(props) =>
  props.isPassed === true
    ? '#d4edda'
    : props.isPassed === false
      ? '#f8d7da'
      : '#fefefe'};
  border: 1px solid
    ${(props) =>
  props.isPassed === true
    ? '#c3e6cb'
    : props.isPassed === false
      ? '#f5c6cb'
      : '#ccc'};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 가운데 정렬 */
  text-align: center;

  &.result-card {
    background-color: ${(props) =>
  props.isPassed === true
    ? '#d4edda'
    : props.isPassed === false
      ? '#f8d7da'
      : '#fefefe'};
    border-color: ${(props) =>
  props.isPassed === true
    ? '#c3e6cb'
    : props.isPassed === false
      ? '#f5c6cb'
      : '#ccc'};
  }
`;

export const PredictionLabel = styled.p`
  font-size: 14px;
  color: #555;
  position:relative;
`;

export const PredictionValue = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 3vh;
`;
