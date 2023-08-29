import React from 'react';
import './styles/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
