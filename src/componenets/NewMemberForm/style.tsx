// src/components/NewMemberForm/style.tsx

import styled from 'styled-components';

interface ProgressProps {
  width: number;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1; /* 공간을 채우도록 설정 */
    gap: 20px; /* 원래 간격으로 복원 */
    overflow: hidden; /* 페이지 스크롤 방지 */
    align-items: center; /* 수평 가운데 정렬 */
    text-align: center; /* 텍스트 가운데 정렬 */
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: normal;
    color: #333;
`;

export const ProgressBar = styled.div`
    width: 40%;
    background-color: #346942;
    border-radius: 10px;
    overflow: hidden;
`;

export const Progress = styled.div<ProgressProps>`
    width: ${(props) => props.width}%;
    height: 8px;
    background-color: #8DC59C;
`;

export const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px; /* 원래 간격으로 복원 */
    align-items: center; /* 수평 가운데 정렬 */
    width: 100%; /* 가운데 정렬을 위해 필요 */
`;

export const DateOfBirthContainer = styled.div`
    display: flex;
    gap: 5px; /* 드롭다운과 라벨 사이 간격 */
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const Dropdown = styled.select`
    padding: 10px 15px; /* 드롭다운 크기 조절 */
    font-size: 20px;
    font-weight: normal;
    border: 1px solid #e4e4e4;
    border-radius: 15px; /* 둥근 모서리 */
    width: 110px; /* 원하는 가로 길이로 설정 */
    text-align: right;
    margin-left: 25px;
`;

export const DropdownLabel = styled.span`
    font-size: 20px;
    color: #333;
    margin-right: 25px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end; /* 버튼을 우측 정렬 */
    gap: 10px;
    width: 100%;
    margin-top: 10px; /* 드롭다운과 버튼 사이 간격 줄이기 */
    margin-right: 300px;
`;

export const Button = styled.button`
    padding: 4px 16px; /* 패딩 줄이기 */
    background-color: #346942;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
`;
