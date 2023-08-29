import React from 'react';
import './styles/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { Example } from './pages/Example';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Example />
    </MainLayout>
  );
};

export default App;
