import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

type Props = object;

export const Logo: React.FC<Props> = () => {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.logo_link}>
        <div className={styles.logo__text} />
      </Link>
    </div>
  );
};
