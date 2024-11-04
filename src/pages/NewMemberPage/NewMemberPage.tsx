// src/pages/NewMemberPage/NewMemberPage.tsx

import React from 'react';
import * as m from './style';
import Header from '../../componenets/Header';
import NewMemberForm from '../../componenets/NewMemberForm/NewMemberForm';

const NewMemberPage: React.FC = () => {
  return (
    <m.Container>
      <Header />
      <NewMemberForm />
    </m.Container>
  );
};

export default NewMemberPage;
