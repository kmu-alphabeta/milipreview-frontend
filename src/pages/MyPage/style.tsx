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
    max-height: 450px; /* 스크롤 높이 제한 */
    overflow-y: scroll; /* 세로 스크롤 활성화 */
    padding-right: 10px; /* 스크롤바와 컨텐츠 간 여백 */
    box-sizing: border-box; /* 패딩 포함한 크기 계산 */

    /* 스크롤바 스타일 숨기기 */
    ::-webkit-scrollbar {
        width: 0px; /* 스크롤바 너비를 0으로 설정 */
    }
    -ms-overflow-style: none; /* IE 및 Edge에서 스크롤바 숨김 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */
`;


export const HistoryContainer = styled.div`
    display: flex; /* 가로로 나란히 배치 */
    flex-direction: row; /* 기본 설정 */
    gap: 20px; /* 컨테이너 간격 */
    width: 100%; /* 전체 너비 채우기 */
    max-height: 600px; /* 상위 컨테이너를 넘지 않도록 제한 */
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

