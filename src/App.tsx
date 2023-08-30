import React from 'react';
import './styles/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { Example } from './components/Example';
import { NotFound } from './components/NotFound';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <MainLayout>
      <NotFound />
      <Example />
      <Outlet />
    </MainLayout>
  );
};

export default App;
