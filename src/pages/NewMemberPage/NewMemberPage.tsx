import React from 'react';
import * as m from './style';
import Header from '../../componenets/Header';
import NewMemberForm from '../../componenets/NewMemberForm/NewMemberForm';

const NewMemberPage: React.FC = () => {
  return (
    <m.Background>
      <m.Container>
        <Header />
        <NewMemberForm />
      </m.Container>
    </m.Background>
  );
};

export default NewMemberPage;
