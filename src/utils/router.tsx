import React, { FC } from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
// import { HomePage } from '../pages/HomePage';
// import { CatalogPage } from '../pages/CatalogPage';
// import { ItemPage } from '../pages/ItemPage';
// import { FavouritesPage } from '../pages/FavouritesPage';
// import { CartPage } from '../pages/CartPage';
// import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<h1>Home Page</h1>} />
          <Route path="catalog">
            <Route index element={<h1>catalog Page</h1>} />
            <Route path=":itemId?" element={<h1>item Page</h1>} />
          </Route>

          <Route path="favourites" element={<h1>favourites Page</h1>} />
          <Route path="cart" element={<h1>cart Page</h1>} />
        </Route>

        <Route path="*" element={<h1>Not Found Page</h1>} />
      </Routes>
     </Router>
  );
};
