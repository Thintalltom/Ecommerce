import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import DeliveryInfoPage from './pages/DeliveryInfoPage';
import PaymentPage from './pages/PaymentPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import Contact from './pages/Contact';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="delivery" element={<DeliveryInfoPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="tracking" element={<OrderTrackingPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>;
}