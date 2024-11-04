import styled, { keyframes } from 'styled-components';

interface AnimatedBoxProps {
  delay: number;
}

const HEADER_HEIGHT = 80; // 헤더 높이 설정

// 애니메이션 정의
const scrollDown = keyframes`
    0% {
        top: 300px;
    }
    100% {
        top: calc(100vh);
    }
`;

export const Container = styled.div`
    position: relative;
    margin: 0% 16%;
    margin-bottom: 20px;
    overflow: hidden;
    z-index: 2; /* 컨테이너를 사각형보다 위로 */
`;

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - ${HEADER_HEIGHT}px);
    position: relative;
    z-index: 2; /* 컨텐츠를 사각형보다 위로 올립니다 */
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 20px;
    padding: 20px;
`;

export const RightContent = styled.div`
    position: absolute;
    top: ${HEADER_HEIGHT}px; /* 헤더 아래에서 시작 */
    right: 0;
    width: 50%;
    height: calc(100vh - ${HEADER_HEIGHT}px);
    overflow: hidden;
    z-index: 1; /* 사각형을 컨텐츠 뒤로 보냅니다 */
`;

export const Column = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    float: left;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

export const Text = styled.p`
    font-size: 16px;
    color: #666;
`;

export const AnimatedBox = styled.div<AnimatedBoxProps>`
    position: absolute;
    width: 100%;
    padding-top: 100%; /* 정사각형 유지 */
    background-color: #e4e4e4;
    border-radius: 10px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    animation: ${scrollDown} 10s linear infinite;
    animation-delay: ${(props) => props.delay}s;
    z-index: 0; /* 사각형을 가장 뒤로 배치 */
`;
