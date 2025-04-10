import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, CreditCardIcon, AppleIcon, LockIcon } from 'lucide-react';
import Button from '../components/Button';
const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  // Mock order summary data
  const orderSummary = {
    subtotal: 1599.98,
    shipping: 12.99,
    tax: 128.0,
    total: 1740.97
  };
  return <div className="bg-[#F9F6F2] pt-24 pb-16 min-h-screen w-full">
      
    </div>;
};
export default PaymentPage;