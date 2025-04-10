import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-[#1A2A4A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">
              LUXE COLLECTION
            </h3>
            <p className="mb-4 text-gray-300">
              Exquisite jewelry, shoes, and bags for the modern connoisseur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=jewelry" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/products?category=shoes" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?category=bags" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/products?category=new" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products?category=sale" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Enter your email" className="bg-[#2A3A5A] border border-gray-600 px-4 py-2 rounded focus:outline-none focus:border-[#D4AF37]" />
              <button type="submit" className="bg-[#D4AF37] text-[#1A2A4A] px-4 py-2 rounded font-medium hover:bg-[#C4A027] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} LUXE COLLECTION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;