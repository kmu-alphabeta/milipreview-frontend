import styled, { keyframes } from 'styled-components';

const HEADER_HEIGHT = 80;

/** 화면 전체 배경 그라데이션 */
export const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #e6f5ec);
  z-index: -3;
`;

/** 화면 전체 초록색 원 배경 */
export const BackgroundCircles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  overflow: hidden;
`;

/** 원의 부드러운 움직임 애니메이션 */
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

/** 원 개별 스타일 */
export const Circle = styled.div<{
  size: string;
  top: string;
  left: string;
  opacity?: number;
}>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background-color: rgba(
    48,
    85,
    58,
    ${(props) => props.opacity || 0.2}
  ); /* 투명도 추가 */
  border-radius: 50%;
  filter: blur(15px);
  z-index: -1;
  animation: ${float} 6s ease-in-out infinite; /* 부드러운 움직임 */
`;

/** 텍스트 스타일 */
export const Text = styled.p`
  font-size: 60px;
  font-weight: bold;
  color: #30553a;
  line-height: 1.5;
  text-align: center;
  white-space: pre-line;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1); /* 텍스트에 은은한 그림자 */
  background: linear-gradient(to right, #30553a, #a0cfa6);
  -webkit-background-clip: text;
  animation: fadeIn 1.5s ease-in-out;
`;

/** 텍스트 페이드인 애니메이션 */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

/** 콘텐츠 영역 */
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  padding-top: 20%;
`;

/** 메인 컨테이너 */
export const Container = styled.div`
  position: relative;
  margin: 0% 16%;
  margin-bottom: 20px;
  overflow: hidden;
  z-index: 0;
`;
