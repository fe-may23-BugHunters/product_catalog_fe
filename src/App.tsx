import React from 'react';
import './styles/main.scss';
import { MainLayout } from './layouts/MainLayout';
// import { Example } from './components/Example';
// import { Navigation } from './components/Navigation';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <MainLayout>
      {/* <Example /> */}
      {/* <Navigation /> */}
      <Header />
    </MainLayout>
  );
};
