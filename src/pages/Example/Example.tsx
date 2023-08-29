import React from 'react';
import s from './Example.module.scss';

export const Example: React.FC = () => {
  return (
    <div className={s.content}>
      <h2 className={s.title}>Example</h2>
    </div>
  );
};
