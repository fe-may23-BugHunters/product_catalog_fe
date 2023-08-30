import React, { ReactNode } from 'react';
import s from './MainLayout.module.scss';
import '../../styles/blocks/_container.scss';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

interface Props {
  children: ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={s.page}>
      <Header />

      <main className={s.page__content}>
        <div className="container">{children}</div>
      </main>

      <Footer />
    </div>
  );
};
