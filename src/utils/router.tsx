import React from 'react';
import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';
import { CartPage } from '../pages/CartPage';
import App from '../App';
import { NotFound } from '../components/NotFound';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="catalog">
            <Route index element={<h1>Catalog Page</h1>} />
            <Route path=":itemId" element={<h1>Product Page</h1>} />
          </Route>

          <Route path="favourites" element={<h1>Favourites Page</h1>} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
