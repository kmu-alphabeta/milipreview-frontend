// src/pages/NewMemberPage/NewMemberPage.tsx

import React from 'react';
import * as m from './style';
import Header from '../../componenets/Header/index';

const NewMemberPage: React.FC = () => {
  return (
    <m.Container>
      <Header />
      <m.InnerContainer>
        <m.MemberBox>
          <m.Title>신규 회원 페이지</m.Title>
          <m.Text>신규 회원 정보를 관리하세요.</m.Text>
        </m.MemberBox>
      </m.InnerContainer>
    </m.Container>
  );
};

export default NewMemberPage;
