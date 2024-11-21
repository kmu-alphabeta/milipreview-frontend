import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
`;

export const ProfileImage = styled.div<{ src: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--gray);
  ${(props) =>
    props.src &&
    `background-image: url(${props.src});`}//props.src가 있는 경우에만 뒤의 코드가 실행, 사용자 기본화면 없으면 회색으로 표시
`;

export const UserName = styled.span`
  font-size: var(--semi-sm);
  color: var(--black);
`;

export const Email = styled.span`
  color: #8a8a8a;
  font-size: var(--sm);
`;
