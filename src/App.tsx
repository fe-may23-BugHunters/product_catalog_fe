import React from 'react';
import './styles/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { Example } from './components/Example';

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Example />
    </MainLayout>
  );
};
