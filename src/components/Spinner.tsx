import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 40px;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Spinner: React.FC = () => {
  return (
    <Container>
      <ReactLoading type="spin" color="#437550" height={160} width={160} />
      <Text>로그인 중입니다...</Text>
    </Container>
  );
};

export default Spinner;
