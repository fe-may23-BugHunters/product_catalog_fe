import React from 'react';
import './styles/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { Example } from './components/Example';
import { NotFound } from './components/NotFound';

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Example />
      <NotFound />
    </MainLayout>
  );
};
