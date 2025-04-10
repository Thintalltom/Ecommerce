import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersIcon, XIcon, ChevronDownIcon } from "lucide-react";
import ProductCard from "../components/ProductCard";

import { cartContextHook } from "../Context/CartContext";
const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || "all"
  );
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("newest");
  const {products} = cartContextHook();
  const filteredProducts = products.filter((product: any) => {
    // Category filter (excluding subcategory check)
    if (
      selectedCategory !== "all" &&
      product.category.toLowerCase() !== selectedCategory.toLowerCase()
    ) {
      return false;
    }
  
    // Price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
  
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a: any, b: any) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
      // newest
    }
  });
  const categories = [
    {
      value: "all",
      label: "All Products",
    },
    {
      value: "jewelry",
      label: "Jewelry",
    },
    {
      value: "necklaces",
      label: "Necklaces",
    },
    {
      value: "earrings",
      label: "Earrings",
    },
    {
      value: "bracelets",
      label: "Bracelets",
    },
    {
      value: "rings",
      label: "Rings",
    },
    {
      value: "shoes",
      label: "Shoes",
    },
    {
      value: "heels",
      label: "Heels",
    },
    {
      value: "flats",
      label: "Flats",
    },
    {
      value: "boots",
      label: "Boots",
    },
    {
      value: "sneakers",
      label: "Sneakers",
    },
    {
      value: "bags",
      label: "Bags",
    },
    {
      value: "totes",
      label: "Totes",
    },
    {
      value: "clutches",
      label: "Clutches",
    },
    {
      value: "backpacks",
      label: "Backpacks",
    },
  ];
  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };
  return (
    <div className="bg-[#F9F6F2] min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A2A4A] mb-2">
            {selectedCategory === "all"
              ? "All Products"
              : categories.find((c) => c.value === selectedCategory)?.label ||
                "Products"}
          </h1>
          <p className="text-gray-500">
            Discover our collection of premium products
          </p>
        </div>
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <button
            className="md:hidden flex items-center text-[#1A2A4A] border border-gray-300 rounded px-4 py-2"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <SlidersIcon size={18} className="mr-2" />
            Filters
          </button>
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category.value
                    ? "bg-[#1A2A4A] text-white"
                    : "bg-white hover:bg-gray-100 text-[#1A2A4A]"
                }`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="w-full md:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-auto bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        {/* Mobile Filters Sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
            mobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              mobileFiltersOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-[#1A2A4A]">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-gray-500 hover:text-[#1A2A4A]"
                >
                  <XIcon size={20} />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto h-full pb-32">
              <div className="mb-6">
                <h4 className="font-medium mb-3 flex items-center justify-between">
                  Categories
                  <ChevronDownIcon size={18} />
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.value} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={() => setSelectedCategory(category.value)}
                        className="mr-2 text-[#D4AF37] focus:ring-[#D4AF37]"
                      />
                      {category.label}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-3 flex items-center justify-between">
                  Price Range
                  <ChevronDownIcon size={18} />
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-20 border border-gray-300 rounded px-2 py-1"
                    />
                    <span className="mx-2">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-20 border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-[#D4AF37] text-[#1A2A4A] py-3 rounded font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        {/* Desktop Price Range Filter */}
        <div className="hidden md:block mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
              <div className="flex gap-4">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-20 border border-gray-300 rounded px-2 py-1"
                />
                <span className="mx-2">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-20 border border-gray-300 rounded px-2 py-1"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">
              No products match your current filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setPriceRange([0, 2000]);
              }}
              className="text-[#D4AF37] font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductsPage;
