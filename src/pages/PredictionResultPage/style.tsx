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

export const PredictionContainer = styled.div`
  width: 400px;
`;

export const HistoryContainer = styled.div`
  display: flex;
  gap: 17px;
`;

export const Graph = styled.div`
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    width: 100%;
    height: 450px;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`;

