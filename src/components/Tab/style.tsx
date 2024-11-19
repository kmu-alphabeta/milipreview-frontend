import styled from 'styled-components';

export const Container = styled.div`
  /* padding: 20px; */
`;

export const TabLayout = styled.div`
  display: flex;
  gap: 20px;
`;

export const TabButton = styled.div<{ active: boolean }>`
  border: none;
  color: ${({ active }) => (active ? '#000' : '#757575')};
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    color: #000;
    transform: translateY(-5px); /* 위로 이동 */
  }
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const Header = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;
