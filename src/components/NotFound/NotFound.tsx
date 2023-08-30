import './NotFound.scss';
import React from 'react';

export const NotFound: React.FC = () => {
  return (
    <div
      className="not-found"
    >
    <h1
      className="not-found__title"
    >
      404 - Page Not Found
    </h1>
    <p
      className="not-found__message"
    >
      Oops! The page you are looking for does not exist
    </p>
  </div>
  );
};
