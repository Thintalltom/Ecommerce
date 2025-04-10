import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  CheckIcon,
  LockIcon,
  CreditCardIcon,
} from "lucide-react";
import { cartContextHook } from "../Context/CartContext";
import Button from "../components/Button";
const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = React.useState<number>(1);
  const { handleInputChange, formData } = cartContextHook();
  const deliveryOptions = [
    {
      id: 1,
      name: "Standard Delivery (3-5 days)",
      value:
        "₦6,000 is to drop off your order at the park. The dispatch rider will call you when he gets to the park so you negotiate and pay the driver for delivery to your state",
      price: `₦5000`,
    },
    {
      id: 2,
      name: "Express Delivery (1-2 days)",
      value: "Office pick up. Delivery takes 3 - 5 Business Days",
      price: `₦8000`,
    },
    {
      id: 3,
      name: "Same Day Delivery",
      value: "Delivery takes 2 - 4 business days",
      price: `₦9000`,
    },
  ];
  // Cart items from previous page
  const cartItems = [
    {
      id: 1,
      name: "Diamond Pendant Necklace",
      price: 1299.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "Silver",
      size: '18"',
    },
    {
      id: 4,
      name: "Leather Stiletto Heels",
      price: 299.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "Black",
      size: "38",
    },
  ];
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 12.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  return (
    <div className="bg-[#F9F6F2] pt-24 pb-16 min-h-screen w-full">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A2A4A] mb-6">Checkout</h1>
          {/* Checkout Steps */}
          <div className="flex justify-between max-w-2xl mx-auto mb-8">
            <div
              className={`flex flex-col items-center ${
                step >= 1 ? "text-[#D4AF37]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step >= 1
                    ? "bg-[#D4AF37] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > 1 ? <CheckIcon size={20} /> : 1}
              </div>
              <span className="text-sm">Delivery</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div
                className={`h-1 w-full ${
                  step >= 2 ? "bg-[#D4AF37]" : "bg-gray-200"
                }`}
              ></div>
            </div>
            <div
              className={`flex flex-col items-center ${
                step >= 2 ? "text-[#D4AF37]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step >= 2
                    ? "bg-[#D4AF37] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > 2 ? <CheckIcon size={20} /> : 2}
              </div>
              <span className="text-sm">Payment</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div
                className={`h-1 w-full ${
                  step >= 3 ? "bg-[#D4AF37]" : "bg-gray-200"
                }`}
              ></div>
            </div>
            <div
              className={`flex flex-col items-center ${
                step >= 3 ? "text-[#D4AF37]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step >= 3
                    ? "bg-[#D4AF37] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                3
              </div>
              <span className="text-sm">Confirmation</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Delivery Information */}
            {step === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6 text-[#1A2A4A]">
                  Delivery Information
                </h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        onChange={handleInputChange}
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                        required
                        name="firstname"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                        required
                        name="lastname"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      required
                      name="email"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      required
                      name="phone"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      required
                      name="address"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                        required
                        name="city"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        State/Province *
                      </label>
                      <input
                        type="text"
                        id="state"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                        required
                        name="state"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label
                        htmlFor="zip"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        ZIP/Postal Code *
                      </label>
                      <input
                        type="text"
                        id="zip"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                        required
                        name="zip"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Country *
                      </label>
                      <select
                        id="country"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                        required
                        name="country"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Country</option>
                        <option value="US">Nigeria</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex  mt-8 lg:justify-between md:justify-between sm:justify-none sm:flex-col lg:flex-row md:flex-row">
                    <Link to="/cart">
                      <Button variant="outline" className="flex items-center">
                        <ChevronLeftIcon size={16} className="mr-1" />
                        Back to Cart
                      </Button>
                    </Link>
                    <Button variant="primary" onClick={() => setStep(2)}>
                      Continue to Payment
                      <ChevronRightIcon size={16} className="ml-1" />
                    </Button>
                  </div>
                </form>
              </div>
            )}
            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="bg-white rounded-lg  shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6 text-[#1A2A4A]">
                  Payment Details
                </h2>
                <div className="mb-6">
                  <div className="border rounded-md p-6">
                    {deliveryOptions.map((option: any) => (
                      <div
                        key={option.id}
                        className="flex items-start gap-[10px] cursor-pointer"
                      >
                        <input
                          type="radio"
                          id={option.id}
                          name="deliveryOption"
                          value={option.id}
                          checked={selected === option.id}
                          onChange={() => setSelected(option.id)}
                          className="mt-1"
                        />
                        <div className="flex flex-col w-full">
                          <div className="font-medium flex justify-between  w-full">
                            <p>{option.name}</p>
                            <p> {option.price}</p>
                          </div>
                          <p className="text-zinc-500 text-sm  w-[90%]">
                            {option.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border rounded-md p-6 mt-6">
                    <p className="font-bold ">Payment Method </p>
                    <div className="flex  flex-col text-sm text-black mt-4 gap-[20px]">
                      <p>
                        Select the appropriate delivery fees for your location
                        to avoid delivery delays.
                      </p>
                      <p>
                        Please do a transfer to Access Bank Bhe Accessories
                        Enterprise 0802040587 Zenith Bank Bhe Accessories
                        Enterprise 1017315077
                      </p>
                      <p>
                        If you are not making payment immediately please confirm
                        availability of items before making payment.
                      </p>
                      <p>
                        Once payment is done send a message via WhatsApp to +234
                        818 347 3466 with a screenshot of your payment
                        confirmation.
                      </p>
                      <div className="flex justify-center items-center">
                        <LockIcon size={14} className="mr-1" />
                        Your payment information is secured with SSL encryption
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex items-center"
                  >
                    <ChevronLeftIcon size={16} className="mr-1" />
                    Back to Delivery
                  </Button>
                  <Button variant="primary" onClick={() => setStep(3)}>
                    Complete Order
                    <ChevronRightIcon size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            )}
            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckIcon size={32} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-[#1A2A4A]">
                    Thank You for Your Order!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Your order has been placed and is being processed.
                  </p>
                  <div className="bg-[#F9F6F2] rounded-lg p-4 mb-6 inline-block">
                    <p className="font-medium">
                      Order Number:{" "}
                      <span className="text-[#D4AF37]">#ORD-23859</span>
                    </p>
                  </div>
                  <p className="text-gray-600 mb-8">
                    We've sent a confirmation email to{" "}
                    <span className="font-medium">{formData.email}</span> with
                    your order details.
                  </p>
                  {/* <Link to="/tracking">
                    <Button variant="primary" size="lg">
                      Track Your Order
                    </Button>
                  </Link> */}
                  <div className="mt-6  flex justify-center items-center">
                    <Link
                      to="/"
                      className="text-[#1A2A4A] hover:text-[#D4AF37]"
                    >
                      <Button variant="primary">Continue Shopping</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-[#1A2A4A]">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex">
                    <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-medium text-[#1A2A4A]">
                        {item.name}
                      </h4>
                      <div className="text-xs text-gray-500 mt-1">
                        <span>Color: {item.color}</span>
                        <span className="mx-1">|</span>
                        <span>Size: {item.size}</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </span>
                        <span className="text-sm font-medium">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3 flex justify-between font-bold text-[#1A2A4A]">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
