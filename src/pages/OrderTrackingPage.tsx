import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, CircleIcon, TruckIcon, PackageIcon, MailIcon, MapPinIcon, ClockIcon, CalendarIcon } from 'lucide-react';
import Button from '../components/Button';
const OrderTrackingPage = () => {
  const [orderNumber, setOrderNumber] = useState('ORD-23859');
  // Mock order data
  const orderData = {
    id: 'ORD-23859',
    date: 'June 15, 2023',
    estimatedDelivery: 'June 20, 2023',
    status: 'shipped',
    trackingNumber: 'TRK-7891011',
    carrier: 'FedEx',
    items: [{
      id: 1,
      name: 'Diamond Pendant Necklace',
      price: 1299.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }, {
      id: 4,
      name: 'Leather Stiletto Heels',
      price: 299.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main St, Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    },
    trackingHistory: [{
      status: 'Order Placed',
      date: 'June 15, 2023',
      time: '10:30 AM',
      location: 'Online',
      completed: true
    }, {
      status: 'Order Processed',
      date: 'June 16, 2023',
      time: '9:15 AM',
      location: 'Warehouse',
      completed: true
    }, {
      status: 'Shipped',
      date: 'June 17, 2023',
      time: '2:45 PM',
      location: 'Distribution Center',
      completed: true
    }, {
      status: 'Out for Delivery',
      date: 'June 19, 2023',
      time: '8:20 AM',
      location: 'Local Facility',
      completed: false
    }, {
      status: 'Delivered',
      date: 'Estimated: June 20, 2023',
      time: '',
      location: 'Delivery Address',
      completed: false
    }]
  };
  // Calculate the current step
  const currentStep = orderData.trackingHistory.filter(step => step.completed).length;
  return <div className="bg-[#F9F6F2] pt-24 pb-16 min-h-screen w-full">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A2A4A] mb-2">
            Order Tracking
          </h1>
          <p className="text-gray-500">
            Track your order status and delivery progress
          </p>
        </div>
        {/* Order Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 max-w-3xl mx-auto">
          <form className="flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="Enter your order number" value={orderNumber} onChange={e => setOrderNumber(e.target.value)} className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" />
            <Button type="submit" variant="primary">
              Track Order
            </Button>
          </form>
        </div>
        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Tracking Progress */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1A2A4A]">
                  Tracking Status
                </h2>
                <div className="flex items-center">
                  <TruckIcon size={18} className="text-[#D4AF37] mr-2" />
                  <span className="font-medium">{orderData.carrier}</span>
                  <span className="mx-2">•</span>
                  <span className="text-gray-500">
                    {orderData.trackingNumber}
                  </span>
                </div>
              </div>
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute left-4 top-1 bottom-1 w-0.5 bg-gray-200"></div>
                {/* Tracking Steps */}
                <div className="space-y-8">
                  {orderData.trackingHistory.map((step, index) => <div key={index} className="relative pl-12">
                      <div className="absolute left-0 top-0 flex items-center justify-center">
                        {step.completed ? <CheckCircleIcon size={32} className="text-[#D4AF37] fill-[#D4AF37]" /> : <CircleIcon size={32} className="text-gray-300" />}
                      </div>
                      <div>
                        <h3 className={`font-medium text-lg ${step.completed ? 'text-[#1A2A4A]' : 'text-gray-500'}`}>
                          {step.status}
                        </h3>
                        <div className="flex flex-wrap items-center text-sm mt-1 gap-x-4 gap-y-1">
                          <div className="flex items-center text-gray-500">
                            <CalendarIcon size={14} className="mr-1" />
                            {step.date}
                          </div>
                          {step.time && <div className="flex items-center text-gray-500">
                              <ClockIcon size={14} className="mr-1" />
                              {step.time}
                            </div>}
                          <div className="flex items-center text-gray-500">
                            <MapPinIcon size={14} className="mr-1" />
                            {step.location}
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
            {/* Delivery Animation */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-[#1A2A4A] mb-6">
                Delivery Progress
              </h2>
              <div className="relative h-20 mb-4">
                {/* Progress Bar */}
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2">
                  <div className="h-full bg-[#D4AF37] rounded-full transition-all duration-1000" style={{
                  width: `${currentStep / (orderData.trackingHistory.length - 1) * 100}%`
                }}></div>
                </div>
                {/* Truck Icon */}
                <div className="absolute top-0 transform -translate-x-1/2 transition-all duration-1000 animate-bounce" style={{
                left: `${currentStep / (orderData.trackingHistory.length - 1) * 100}%`
              }}>
                  <div className="bg-[#1A2A4A] rounded-full p-3 shadow-lg">
                    <TruckIcon size={24} className="text-white" />
                  </div>
                </div>
                {/* Start Point */}
                <div className="absolute bottom-0 left-0 flex flex-col items-center">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full mb-1"></div>
                  <span className="text-xs text-gray-500">Warehouse</span>
                </div>
                {/* End Point */}
                <div className="absolute bottom-0 right-0 flex flex-col items-center">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full mb-1"></div>
                  <span className="text-xs text-gray-500">Your Address</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Shipped on</p>
                  <p className="font-medium">
                    {orderData.trackingHistory[2].date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Estimated delivery</p>
                  <p className="font-medium">{orderData.estimatedDelivery}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-[#1A2A4A]">
                Order Summary
              </h2>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Order Number:</span>
                  <span className="font-medium">{orderData.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Order Date:</span>
                  <span>{orderData.date}</span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mb-4">
                <h3 className="font-medium mb-3">Items</h3>
                <div className="space-y-3">
                  {orderData.items.map(item => <div key={item.id} className="flex">
                      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-[#1A2A4A]">
                          {item.name}
                        </p>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </span>
                          <span className="text-sm font-medium">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mb-4">
                <h3 className="font-medium mb-3">Shipping Address</h3>
                <div className="text-sm text-gray-600">
                  <p>{orderData.shippingAddress.name}</p>
                  <p>{orderData.shippingAddress.address}</p>
                  <p>
                    {orderData.shippingAddress.city},{' '}
                    {orderData.shippingAddress.state}{' '}
                    {orderData.shippingAddress.zip}
                  </p>
                  <p>{orderData.shippingAddress.country}</p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Subtotal:</span>
                  <span>
                    $
                    {orderData.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Shipping:</span>
                  <span>$12.99</span>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-500">Tax:</span>
                  <span>$128.00</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>$1,740.97</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Button variant="outline" fullWidth className="flex items-center justify-center">
                  <MailIcon size={16} className="mr-2" />
                  Email Receipt
                </Button>
                <Link to="/contact">
                  <Button variant="secondary" fullWidth>
                    Need Help?
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default OrderTrackingPage;