import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import LoadingFallback from '../pages/LoadingFallback';
import ErrorBoundary from '../components/ErrorBoundary';
import SettingsPage from '../pages/SettingsPage';

// Import local mock components for development
import DashboardApp from '../mocks/DashboardApp';
import ProductsApp from '../mocks/ProductsApp';
import OrdersApp from '../mocks/OrdersApp';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <DashboardApp />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="products"
          element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <ProductsApp />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="orders"
          element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <OrdersApp />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
