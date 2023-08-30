import React from 'react';
import './styles/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { NotFound } from './components/NotFound';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <MainLayout>
      <NotFound />
      <Outlet />
    </MainLayout>
  );
};

export default App;
