import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TrashIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from "lucide-react";
import Button from "../components/Button";
import axios from "axios";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
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
  ]);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 12.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax - promoDiscount;
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };
  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const applyPromoCode = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Reset previous messages
    setPromoError("");
    setPromoSuccess("");
    // Mock promo code validation
    if (promoCode.toUpperCase() === "WELCOME10") {
      setPromoSuccess("Promo code applied successfully!");
      setPromoDiscount(subtotal * 0.1); // 10% discount
    } else {
      setPromoError("Invalid promo code");
    }
  };
  // Email cart functionality
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const handleEmailCart = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Mock email sending
    setTimeout(() => {
      setEmailSent(true);
      setTimeout(() => setEmailSent(false), 3000);
    }, 1000);
  };

  const getEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleSender = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://email-sender-98we.vercel.app/api/send-email",
        {
          email: email,
          orderSummary: cartItems,
        }
      );
      setTimeout(() => {
        setEmailSent(true);
        setEmail("");
        setTimeout(() => setEmailSent(false), 3000);
      }, 1000);
      console.log(response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="bg-[#F9F6F2] pt-24 pb-16 min-h-screen w-full">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#1A2A4A] mb-8">
          Your Shopping Bag
        </h1>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Cart Header */}
                <div className="bg-gray-50 p-4 border-b">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6 font-medium">Product</div>
                    <div className="col-span-2 font-medium text-center">
                      Price
                    </div>
                    <div className="col-span-2 font-medium text-center">
                      Quantity
                    </div>
                    <div className="col-span-2 font-medium text-right">
                      Total
                    </div>
                  </div>
                </div>
                {/* Cart Items */}
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 border-b last:border-0">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      {/* Product */}
                      <div className="col-span-6">
                        <div className="flex items-center">
                          <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-medium text-[#1A2A4A]">
                              {item.name}
                            </h3>
                            <div className="text-sm text-gray-500 mt-1">
                              <span>Color: {item.color}</span>
                              <span className="mx-2">|</span>
                              <span>Size: {item.size}</span>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-sm text-red-500 flex items-center mt-2 hover:text-red-600"
                            >
                              <TrashIcon size={14} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Price */}
                      <div className="col-span-2 text-center">
                        ${item.price.toFixed(2)}
                      </div>
                      {/* Quantity */}
                      <div className="col-span-2">
                        <div className="flex items-center justify-center">
                          <button
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded-l-md hover:bg-gray-100"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            <MinusIcon size={14} />
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, Number(e.target.value))
                            }
                            className="w-12 h-8 border-t border-b border-gray-300 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          <button
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded-r-md hover:bg-gray-100"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <PlusIcon size={14} />
                          </button>
                        </div>
                      </div>
                      {/* Total */}
                      <div className="col-span-2 font-medium text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Email Cart */}
              <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium mb-4">Email Your Cart</h3>
                <p className="text-gray-600 mb-4">
                  Send your cart to your email for later or share it with
                  someone else.
                </p>
                <form
                  onSubmit={handleSender}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={getEmail}
                    required
                    className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    disabled={emailSent}
                  >
                    {emailSent ? "Sent!" : "Send Cart"}
                  </Button>
                </form>
              </div>
            </div>
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6 text-[#1A2A4A]">
                  Order Summary
                </h2>
                <div className="space-y-3 text-gray-600 mb-6">
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
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-[#D4AF37]">
                      <span>Discount</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-3 mt-3 flex justify-between font-bold text-[#1A2A4A]">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                {/* Promo Code */}
                {/* <div className="mb-6">
                  <form onSubmit={applyPromoCode} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                    <Button type="submit" variant="outline">
                      Apply
                    </Button>
                  </form>
                  {promoError && (
                    <p className="text-red-500 text-sm mt-2">{promoError}</p>
                  )}
                  {promoSuccess && (
                    <p className="text-green-600 text-sm mt-2">
                      {promoSuccess}
                    </p>
                  )}
                </div> */}
                <Link to="/checkout">
                  <Button variant="primary" fullWidth size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
                <div className="mt-4">
                  <Link
                    to="/products"
                    className="text-[#1A2A4A] flex items-center justify-center hover:text-[#D4AF37]"
                  >
                    <ShoppingBagIcon size={16} className="mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="mb-6 flex justify-center">
              <ShoppingBagIcon size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-[#1A2A4A]">
              Your shopping bag is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your bag yet.
            </p>
            <Link to="/products">
              <Button variant="primary" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartPage;
