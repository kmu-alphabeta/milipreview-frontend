import styled from 'styled-components';
import militaryImg from '../../assets/military.svg';

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
  align-items: stretch;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
  align-items: center;
`;

export const LeftBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e4e4e4;
  padding: 30px 40px;
`;

export const RightBox = styled.div`
  flex-grow: 1;
  width: 29%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 7px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e4e4e4;
`;

export const RightInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 7px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e4e4e4;
  gap: 20px;
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
  width: 100%;
  height: 125px;
  background-color: rgba(0, 0, 0, 0.5); /* 텍스트 배경 반투명 설정 */
  padding: 30px 140px;
  border-radius: 10px;
`;

export const TitleText = styled.div`
  font-size: var(--large);
  font-weight: var(--medium);
  color: white;
  margin-bottom: 10px;
`;

export const SubTitleText = styled.div`
  font-size: 20px;
  font-weight: var(--semi-light);
  color: black;
`;

export const LeftBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const CategoryTitle = styled.div`
  font-size: 17px;
  font-weight: var(--semi-light);
  color: var(--green);
  margin-bottom: 4px;
`;

export const SpecialtyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 열로 정렬 */
`;

export const TextButton = styled.div`
  margin: 5px;
  font-size: 15px;
  color: black;
  cursor: pointer;
`;

export const Text = styled.div`
  font-size: 15px;
  font-weight: var(--semi-bold);
  color: black;
  text-align: center;
  width: 220px;
  line-height: 1.4; /* 줄 간격을 조절하여 가독성 향상 */
  word-break: break-word;
  white-space: normal; /* 너비를 벗어나면 줄바꿈 */
`;

export const smText = styled.div`
  font-size: 13px;
  color: black;
  text-align: center;
  width: 220px;
  line-height: 1.4; /* 줄 간격을 조절하여 가독성 향상 */
  word-break: break-word;
  white-space: normal; /* 너비를 벗어나면 줄바꿈 */
`;
