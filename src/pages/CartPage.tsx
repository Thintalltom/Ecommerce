import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrashIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from "lucide-react";
import Button from "../components/Button";
import axios from "axios";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([] as any);

  const getOrder = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/orders"
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  }
  useEffect(() => {
   getOrder()
  }, [])
  

  const [promoDiscount, setPromoDiscount] = useState(0);
  // Email cart functionality
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);


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

const senderemail ='adeyanjutomide@gmail.com'
  const handleSellerMail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://email-sender-98we.vercel.app/api/notify-email",
        {
          email: senderemail,
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

  const sendMail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
  
  
     await handleSender(e),
    await  handleSellerMail(e)
  
  };
  const getPrice = cartItems.map(((item: any) => item.totalAmount))
  const subTotal = getPrice.reduce((a: any, b: any) => a + b, 0)

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
                <div className="bg-gray-50 p-4 border-b">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4 font-medium">Product</div>
                    
                    <div className="col-span-4 font-medium text-center">
                      Quantity
                    </div>
                    <div className="col-span-4 text-center font-medium ">
                      Total
                    </div>
                  </div>
                </div>
                {/* Cart Items */}
                {cartItems.map((item: any) => (
                  <div key={item.id} className="p-4 border-b last:border-0">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      {/* Product */}
                      <div className="col-span-4">
                        <div className="flex items-center">
                          <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                            <img
                              src={item.products[0].image}
                              alt={item.products[0].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-medium text-[#1A2A4A]">
                              {item.products[0].name}
                            </h3>
                            {/* <div className="text-sm text-gray-500 mt-1">
                              <span>Color: {item.color}</span>
                              <span className="mx-2">|</span>
                              <span>Size: {item.size}</span>
                            </div> */}
                            <button
                              // onClick={() => removeItem(item.id)}
                              className="text-sm text-red-500 flex items-center mt-2 hover:text-red-600"
                            >
                              <TrashIcon size={14} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Price */}


                      <div className="col-span-4 text-center">
                       {item.products[0].quantity}
                      </div>

                      <div className="col-span-4 text-center">
                        ${item.totalAmount}
                      </div>

                      {/* Quantity */}
                    
                      {/* Total */}
                      {/* <div className="col-span-2 font-medium text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div> */}
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
                  onSubmit={sendMail}
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
                    <span>${subTotal}</span>
                    {/* <span>${subtotal.toFixed(2)}</span> */}
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {subTotal > 500 ? "Free" : "$10.00"}
                      {/* {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`} */}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax</span>
                    <span>$0.00</span>
                    {/* <span>${tax.toFixed(2)}</span> */}
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-[#D4AF37]">
                      <span>Discount</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-3 mt-3 flex justify-between font-bold text-[#1A2A4A]">
                    <span>Total</span>
                    <span>
                      $
                      {subTotal > 500
                        ? (subTotal - promoDiscount).toFixed(2)
                        : (subTotal + 10 - promoDiscount).toFixed(2)}
                    </span>
                    {/* <span>${total.toFixed(2)}</span> */}
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
