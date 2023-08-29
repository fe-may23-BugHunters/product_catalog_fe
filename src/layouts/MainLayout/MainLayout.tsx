import React, { PropsWithChildren } from 'react';
import s from './MainLayout.module.scss';
import '../../styles/blocks/_container.scss';

export const MainLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={s.page}>
      {/* <Header /> */}

      <main className={s.page_content}>
        <div className="container">
          {children}
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};