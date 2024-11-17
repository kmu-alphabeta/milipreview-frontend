import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const TabLayout = styled.div`
  display: flex;
  gap: 10px;
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  background-color: ${({ active }) => (active ? '#437550' : '#d9d9d9')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #437550;
    color: #fff;
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
