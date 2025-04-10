import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  InstagramIcon,
} from "lucide-react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      id: 1,
      title: "Elegant Jewelry Collection",
      subtitle: "Timeless pieces for every occasion",
      cta: "Shop Jewelry",
      link: "/products?category=jewelry",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 2,
      title: "Luxury Footwear",
      subtitle: "Step into style with our premium shoes",
      cta: "Shop Shoes",
      link: "/products?category=shoes",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 3,
      title: "Designer Bags",
      subtitle: "Complete your look with our exclusive collection",
      cta: "Shop Bags",
      link: "/products?category=bags",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    },
  ];
  const featuredProducts = [
    {
      id: 1,
      name: "Diamond Pendant Necklace",
      price: 1299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Jewelry",
      isNew: true,
    },
    {
      id: 2,
      name: "Leather Stiletto Heels",
      price: 299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Shoes",
      isSale: true,
      salePrice: 249.99,
    },
    {
      id: 3,
      name: "Designer Tote Bag",
      price: 499.99,
      imageUrl:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Bags",
    },
    {
      id: 4,
      name: "Gold Hoop Earrings",
      price: 249.99,
      imageUrl:
        "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Jewelry",
      isNew: true,
    },
  ];
  const categories = [
    {
      name: "Jewelry",
      image:
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=jewelry",
    },
    {
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=shoes",
    },
    {
      name: "Bags",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=bags",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };
  return (
    <div className="w-full">
      <div className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-3xl mx-auto">
                <h1
                  className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-[fadeInUp_1s_0.5s_forwards]"
                  style={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  className="text-xl md:text-2xl mb-8 opacity-0 animate-[fadeInUp_1s_0.7s_forwards]"
                  style={{
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  {slide.subtitle}
                </p>
                <div className="opacity-0 animate-[fadeInUp_1s_0.9s_forwards]">
                  <Link to={slide.link}>
                    <Button size="lg" variant="primary">
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-[#D4AF37] w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 transition-all"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeftIcon size={24} className="text-white" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 transition-all"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRightIcon size={24} className="text-white" />
        </button>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A2A4A]">
            Shop By Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.link}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="w-full flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white">
                      {category.name}
                    </h3>
                    <div className="bg-[#D4AF37] rounded-full p-2 transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRightIcon size={20} className="text-[#1A2A4A]" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#F9F6F2]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A2A4A]">
              Featured Products
            </h2>
            <Link
              to="/products"
              className="text-[#D4AF37] font-medium flex items-center hover:underline"
            >
              View All <ArrowRightIcon size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#1A2A4A] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Exclusive Club
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter and get 10% off your first order plus
              exclusive access to new arrivals and promotions.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded focus:outline-none"
              />
              <Button variant="primary" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#D4AF37]"></div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-[#D4AF37]"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#D4AF37]"></div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1A2A4A]">
            Follow Us on Instagram
          </h2>
          <p className="text-center text-gray-500 mb-12">@luxecollection</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <a
                key={item}
                href="#"
                className="group relative aspect-square overflow-hidden"
              >
                <img
                  src={`https://source.unsplash.com/random/600x600?jewelry,shoes,bags&sig=${item}`}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <InstagramIcon size={30} className="text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
