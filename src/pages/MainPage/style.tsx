import styled from 'styled-components';
import militaryImg from '../../assets/military.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0% 16%;
  gap: 15px;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
  align-items: center;
`;

export const LeftBox = styled.div`
  height: 430px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e4e4e4;
`;

export const RightBox = styled.div`
  height: 575px;
  width: 29%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px 7px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e4e4e4;
`;

export const Image = styled.div`
  width: 100%;
  height: 125px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${militaryImg});
`;

export const OverlayText = styled.div`
  height: 125px;
  background-color: rgba(0, 0, 0, 0.5); /* 텍스트 배경 반투명 설정 */
  padding: 30px 140px;
  border-radius: 8px;
`;

export const TitleText = styled.div`
  font-size: var(--large);
  font-weight: var(--medium);
  color: white;
  margin-bottom: 10px;
`;
