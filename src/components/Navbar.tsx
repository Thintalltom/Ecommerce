import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, UserIcon, SearchIcon, MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#1A2A4A] transition-transform hover:scale-105">
          LUXE COLLECTION
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-[#1A2A4A] hover:text-[#D4AF37] transition-colors">
            Home
          </Link>
          <div className="group relative">
            <Link to="/products" className="text-[#1A2A4A] hover:text-[#D4AF37] transition-colors">
              Jewelry
            </Link>
            {/* <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 w-48 mt-2">
              <Link to="/products?category=necklaces" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Necklaces
              </Link>
              <Link to="/products?category=earrings" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Earrings
              </Link>
              <Link to="/products?category=bracelets" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Bracelets
              </Link>
              <Link to="/products?category=rings" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Rings
              </Link>
            </div> */}
          </div>
          <div className="group relative">
            <Link to="/products" className="text-[#1A2A4A] hover:text-[#D4AF37] transition-colors">
              Shoes
            </Link>
            {/* <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 w-48 mt-2">
              <Link to="/products?category=heels" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Heels
              </Link>
              <Link to="/products?category=flats" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Flats
              </Link>
              <Link to="/products?category=boots" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Boots
              </Link>
              <Link to="/products?category=sneakers" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Sneakers
              </Link>
            </div> */}
          </div>
          <div className="group relative">
            <Link to="/products" className="text-[#1A2A4A] hover:text-[#D4AF37] transition-colors">
              Bags
            </Link>
            {/* <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 w-48 mt-2">
              <Link to="/products?category=handbags" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Handbags
              </Link>
              <Link to="/products?category=totes" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Totes
              </Link>
              <Link to="/products?category=clutches" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Clutches
              </Link>
              <Link to="/products?category=backpacks" className="block py-2 text-[#1A2A4A] hover:text-[#D4AF37]">
                Backpacks
              </Link>
            </div> */}
          </div>
          <Link to="/about" className="text-[#1A2A4A] hover:text-[#D4AF37] transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-[#1A2A4A] hover:text-[#D4AF37] transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-[#1A2A4A] hover:text-[#D4AF37] transition-colors relative">
            <ShoppingBagIcon size={20} />
            <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Link>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#1A2A4A]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-[#1A2A4A] hover:text-[#D4AF37] py-2 border-b border-gray-100">
              Home
            </Link>
            <Link to="/products" className="text-[#1A2A4A] hover:text-[#D4AF37] py-2 border-b border-gray-100">
              Jewelry
            </Link>
            <Link to="/products" className="text-[#1A2A4A] hover:text-[#D4AF37] py-2 border-b border-gray-100">
              Shoes
            </Link>
            <Link to="/products" className="text-[#1A2A4A] hover:text-[#D4AF37] py-2 border-b border-gray-100">
              Bags
            </Link>
            <Link to="/about" className="text-[#1A2A4A] hover:text-[#D4AF37] py-2 border-b border-gray-100">
              About
            </Link>
            <Link to="/contact" className="text-[#1A2A4A] hover:text-[#D4AF37] py-2">
              Contact
            </Link>
          </div>
        </div>}
    </header>;
};
export default Navbar;