import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { SlidersIcon, XIcon, ChevronDownIcon } from "lucide-react";
import ProductCard from "../components/ProductCard";

import { cartContextHook } from "../Context/CartContext";
const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryParam = searchParams.get("category") || "all";
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || "all"
  );
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("newest");
  const { products } = cartContextHook();
  // const filteredProducts = products.filter((product: any) => {
  //   // Category filter (excluding subcategory check)
  //   if (
  //     selectedCategory !== "all" &&
  //     product.category.toLowerCase() !== selectedCategory.toLowerCase()
  //   ) {
  //     return false;
  //   }

  //   // Price range filter
  //   if (product.price < priceRange[0] || product.price > priceRange[1]) {
  //     return false;
  //   }

  //   return true;
  // });

  // Sort products
  // const sortedProducts = [...filteredProducts].sort((a: any, b: any) => {
  //   switch (sortBy) {
  //     case "price-low":
  //       return a.price - b.price;
  //     case "price-high":
  //       return b.price - a.price;
  //     case "name-asc":
  //       return a.name.localeCompare(b.name);
  //     case "name-desc":
  //       return b.name.localeCompare(a.name);
  //     default:
  //       return 0;
  //     // newest
  //   }
  // });
  // const category =  products.map((product: any) => product.category);

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };

  const [selectedTab, setSelectedTab] = useState(categoryParam);

  // const handleTabClick = (tab: string) => {
  //   setSelectedTab(tab);
  // };

  const tabs = ["all", "Bag", "Shoe", "Clothe", "Jeans"];

  useEffect(() => {
    setSelectedTab(categoryParam);
  }, [categoryParam]);

  // Update the URL when a tab is clicked
  const handleTabClick = (tab: string) => {
    setSearchParams({ category: tab });
    setSelectedTab(tab);
  };

  const filteredProducts =
    selectedTab === "all"
      ? products
      : products.filter((product: any) => product.category === selectedTab);

  return (
    <div className="bg-[#F9F6F2] min-h-screen pt-24 pb-16">
      <div className="md:block  mb-4   hidden ">
        <div className="flex  justify-center items-center gap-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 rounded-full ${
              selectedTab === tab ? "bg-[#D4AF37] text-white" : "bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
        </div>
        
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-[20px] gap-4 md:gap-6">
  {filteredProducts.length === 0 ? (
    <div className="col-span-full text-center text-gray-500 font-medium text-lg">
      No products found in this category.
    </div>
  ) : (
    filteredProducts.map((product: any) => (
      <ProductCard key={product.id} product={product} />
    ))
  )}
</div>
    </div>
  );
};
export default ProductsPage;


