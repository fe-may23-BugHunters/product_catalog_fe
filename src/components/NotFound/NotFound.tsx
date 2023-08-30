import './NotFound.scss';
import React from 'react';

export const NotFound: React.FC = () => {
  return (
    <div id='main'>
      <div className='notfound'>
        <h1 className='notfound__title'>404 - Page Not Found</h1>

        <p className='notfound__title'>
          Oops! The page you are looking for does not exist
        </p>
      </div>
    </div>
  );
};
