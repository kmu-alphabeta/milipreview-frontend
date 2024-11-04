// src/pages/NewMemberPage/style.tsx

import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    background: linear-gradient(to bottom, #ffffff 60%, #C7D6CB); /* 전체 배경 그라데이션 */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* Header의 가로 길이에 영향 없도록 100%로 설정 */
  margin: 0% 16%;
  gap: 15px;
  height: 100vh;
  overflow: hidden;
`;
