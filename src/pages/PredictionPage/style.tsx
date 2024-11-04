import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0% 16%;
  margin-bottom: 20px;
  gap: 15px;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  width: 100%;
`;

export const PredictionBox = styled.div`
  height: 650px;
  width: 100%;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e4e4e4;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
`;
