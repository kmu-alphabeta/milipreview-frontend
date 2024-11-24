import styled, { keyframes } from 'styled-components';

const HEADER_HEIGHT = 80;

export const Container = styled.div`
    position: relative;
    margin: 0% 16%;
    margin-bottom: 20px;
    overflow: hidden;
`;

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

export const Text = styled.p`
    font-size: 60px;
    font-weight: bold;
    color: #30553A;
    line-height: 1.5;
    text-align: center;
    white-space: pre-line;
`;
