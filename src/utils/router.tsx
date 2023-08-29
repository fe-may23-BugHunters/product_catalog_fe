import React, { FC } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/CatalogPage';
import { ItemPage } from '../pages/ItemPage';
import { FavouritesPage } from '../pages/FavouritesPage';
import { CartPage } from '../pages/CartPage';
import { NotFoundPage } from '../pages/NotFoundPage';


export const AppRouter: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/product_catalog_fe">
                    <Route index element={<HomePage />} />
                    <Route path="phones">
                        <Route index element={<CatalogPage />} />
                        <Route path=":itemId?" element={<ItemPage />} />
                    </Route>
                    <Route path="tablets">
                        <Route index element={<CatalogPage />} />
                        <Route path=":itemId" element={<ItemPage />} />
                    </Route>
                    <Route path="accessories">
                        <Route index element={<CatalogPage />} />
                        <Route path=":itemId?" element={<ItemPage />} />
                    </Route>
                    <Route path="favourites" element={<FavouritesPage />} />
                    <Route path="cart" element={<CartPage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};