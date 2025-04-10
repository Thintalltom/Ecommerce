import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, BuildingIcon, MapPinIcon } from 'lucide-react';
import Button from '../components/Button';
const DeliveryInfoPage = () => {
  const [addressType, setAddressType] = useState('home');
  const [savedAddress, setSavedAddress] = useState(null);
  return <div className="bg-[#F9F6F2] pt-24 pb-16 min-h-screen w-full">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A2A4A] mb-2">
            Delivery Information
          </h1>
          <p className="text-gray-500">Please provide your delivery details</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 text-[#1A2A4A]">
            Address Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button className={`p-4 border rounded-md flex flex-col items-center justify-center transition-colors ${addressType === 'home' ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-gray-200 hover:border-gray-300'}`} onClick={() => setAddressType('home')}>
              <HomeIcon size={24} className={addressType === 'home' ? 'text-[#D4AF37]' : 'text-gray-500'} />
              <span className={`mt-2 font-medium ${addressType === 'home' ? 'text-[#1A2A4A]' : 'text-gray-500'}`}>
                Home
              </span>
            </button>
            <button className={`p-4 border rounded-md flex flex-col items-center justify-center transition-colors ${addressType === 'office' ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-gray-200 hover:border-gray-300'}`} onClick={() => setAddressType('office')}>
              <BuildingIcon size={24} className={addressType === 'office' ? 'text-[#D4AF37]' : 'text-gray-500'} />
              <span className={`mt-2 font-medium ${addressType === 'office' ? 'text-[#1A2A4A]' : 'text-gray-500'}`}>
                Office
              </span>
            </button>
            <button className={`p-4 border rounded-md flex flex-col items-center justify-center transition-colors ${addressType === 'other' ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-gray-200 hover:border-gray-300'}`} onClick={() => setAddressType('other')}>
              <MapPinIcon size={24} className={addressType === 'other' ? 'text-[#D4AF37]' : 'text-gray-500'} />
              <span className={`mt-2 font-medium ${addressType === 'other' ? 'text-[#1A2A4A]' : 'text-gray-500'}`}>
                Other
              </span>
            </button>
          </div>
          {savedAddress && <div className="mb-6">
              <h3 className="font-medium mb-3">Saved Addresses</h3>
              <div className="border rounded-md p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-500">123 Main St, Apt 4B</p>
                  <p className="text-sm text-gray-500">New York, NY 10001</p>
                  <p className="text-sm text-gray-500">United States</p>
                  <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    Use This Address
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button className="text-[#D4AF37] hover:underline text-sm" onClick={() => setSavedAddress(null)}>
                  Add New Address
                </button>
              </div>
            </div>}
          {!savedAddress && <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input type="text" id="firstName" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input type="text" id="lastName" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input type="email" id="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input type="tel" id="phone" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address *
                </label>
                <input type="text" id="address" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>
              <div className="mb-4">
                <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
                  Apartment, Suite, etc. (optional)
                </label>
                <input type="text" id="address2" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input type="text" id="city" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State/Province *
                  </label>
                  <input type="text" id="state" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP/Postal Code *
                  </label>
                  <input type="text" id="zip" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <select id="country" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" required>
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <input type="checkbox" id="saveAddress" className="mr-2 text-[#D4AF37] focus:ring-[#D4AF37]" />
                <label htmlFor="saveAddress" className="text-sm text-gray-700">
                  Save this address for future orders
                </label>
              </div>
              <div className="flex items-center mb-6">
                <input type="checkbox" id="defaultAddress" className="mr-2 text-[#D4AF37] focus:ring-[#D4AF37]" />
                <label htmlFor="defaultAddress" className="text-sm text-gray-700">
                  Set as default address
                </label>
              </div>
            </form>}
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 text-[#1A2A4A]">
            Delivery Options
          </h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4 flex items-center">
              <input type="radio" id="standard" name="deliveryOption" className="mr-3 text-[#D4AF37] focus:ring-[#D4AF37]" defaultChecked />
              <label htmlFor="standard" className="flex-1">
                <p className="font-medium">Standard Delivery</p>
                <p className="text-sm text-gray-500">3-5 business days</p>
              </label>
              <span className="font-medium">$5.99</span>
            </div>
            <div className="border rounded-md p-4 flex items-center">
              <input type="radio" id="express" name="deliveryOption" className="mr-3 text-[#D4AF37] focus:ring-[#D4AF37]" />
              <label htmlFor="express" className="flex-1">
                <p className="font-medium">Express Delivery</p>
                <p className="text-sm text-gray-500">1-2 business days</p>
              </label>
              <span className="font-medium">$12.99</span>
            </div>
            <div className="border rounded-md p-4 flex items-center">
              <input type="radio" id="nextDay" name="deliveryOption" className="mr-3 text-[#D4AF37] focus:ring-[#D4AF37]" />
              <label htmlFor="nextDay" className="flex-1">
                <p className="font-medium">Next Day Delivery</p>
                <p className="text-sm text-gray-500">
                  Guaranteed next business day
                </p>
              </label>
              <span className="font-medium">$19.99</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 text-[#1A2A4A]">
            Special Instructions (Optional)
          </h2>
          <textarea rows={4} placeholder="Add any special delivery instructions or notes..." className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"></textarea>
        </div>
        <div className="flex justify-between">
          <Link to="/cart">
            <Button variant="outline" className="flex items-center">
              <ChevronLeftIcon size={16} className="mr-1" />
              Back to Cart
            </Button>
          </Link>
          <Link to="/payment">
            <Button variant="primary" className="flex items-center">
              Continue to Payment
              <ChevronRightIcon size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>;
};
export default DeliveryInfoPage;