import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CommunityView from '../../components/Community/CommunityView';
import CommunityWrite from '../../components/Community/CommunityWrite';
import CommunityDetail from '../../components/Community/CommunityDetail';
import Header from '../../components/Header';
import { Container } from './style';

const CommunityPage = () => {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<CommunityView />} />
          <Route path="/write" element={<CommunityWrite />} />
          <Route path="/detail/:id" element={<CommunityDetail />} />
        </Routes>
      </Container>
    </>
  );
};

export default CommunityPage;
