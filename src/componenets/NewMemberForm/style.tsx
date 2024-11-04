// src/components/NewMemberForm/style.tsx

import styled from 'styled-components';

interface ProgressProps {
  width: number;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1; /* 공간을 채우도록 설정 */
    gap: 20px;
    overflow: hidden; /* 페이지 스크롤 방지 */
    align-items: center; /* 수평 가운데 정렬 */
    text-align: center; /* 텍스트 가운데 정렬 */
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

export const ProgressBar = styled.div`
    width: 50%;
    background-color: #f1f1f1;
    border-radius: 10px;
    overflow: hidden;
`;

export const Progress = styled.div<ProgressProps>`
    width: ${(props) => props.width}%;
    height: 10px;
    background-color: #4caf50;
`;

export const InputSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto; /* 내부 스크롤 활성화 */
    align-items: center; /* 수평 가운데 정렬 */
    width: 100%; /* 가운데 정렬을 위해 필요 */
`;

export const InputLabel = styled.label`
    font-size: 16px;
    color: #333;
    width: 50%; /* 입력 요소의 너비를 제한하여 가운데 정렬 효과 */
`;

export const TextInput = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    width: 50%; /* 입력 요소의 너비를 제한하여 가운데 정렬 효과 */
`;

export const CheckboxGroup = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center; /* 체크박스 그룹 가운데 정렬 */
    width: 50%; /* 너비 제한 */

    label {
        font-size: 16px;
        color: #333;
    }

    input {
        margin-right: 5px;
    }
`;

export const Dropdown = styled.select`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    width: 52%; /* 드롭다운 너비를 입력 필드와 맞춤 */
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center; /* 버튼 컨테이너 가운데 정렬 */
    gap: 10px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
