import React from 'react';
import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';
import { CartPage } from '../pages/CartPage';
import App from '../App';
import { AccessoriesPage } from '../pages/AccessoriesPage';
import { PhonesPage } from '../pages/PhonesPage';
import { TabletsPage } from '../pages/TabletsPage';
import { NotFound } from '../components/NotFound';


export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="phones">
            <Route index element={<PhonesPage />} />
            <Route path=":itemId" element={<h1>Product Item</h1>} />
          </Route>

          <Route path="tablets">
            <Route index element={<TabletsPage />} />
            <Route path=":itemId" element={<h1>Product Item</h1>} />
          </Route>

          <Route path="accessories">
            <Route index element={<AccessoriesPage />} />
            <Route path=":itemId" element={<h1>Product Item</h1>} />
          </Route>

          <Route path="favourites" element={<h1>Favourites Page</h1>} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
