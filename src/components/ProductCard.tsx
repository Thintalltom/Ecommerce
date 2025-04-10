import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBagIcon, HeartIcon } from "lucide-react";
interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}
const ProductCard = ({
  id,
  title,
  price,
  image,
  category,
  isNew = false,
  isSale = false,
  salePrice,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100 rounded-sm mb-3">
        <Link to={`/products/${id}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        {/* Quick Action Buttons */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-3 flex justify-between transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            className="flex-1 py-1.5 text-[#1A2A4A] font-medium text-sm hover:text-[#D4AF37] transition-colors flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
          >
            <ShoppingBagIcon size={16} className="mr-1" />
            Add to Bag
          </button>
        </div>
        {/* Product Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="bg-[#1A2A4A] text-white text-xs px-2 py-1 rounded">
              New
            </span>
          )}
          {isSale && (
            <span className="bg-[#D4AF37] text-[#1A2A4A] text-xs px-2 py-1 rounded">
              Sale
            </span>
          )}
        </div>
      </div>
      {/* Product Info */}
      <div>
        <p className="text-xs text-gray-500 uppercase mb-1">{category}</p>
        <Link to={`/products/${id}`} className="block">
          <h3 className="text-[#1A2A4A] font-medium mb-1 hover:text-[#D4AF37] transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex items-center">
          {isSale && salePrice ? (
            <>
              <span className="text-[#D4AF37] font-medium">
                ${salePrice.toFixed(2)}
              </span>
              <span className="text-gray-400 line-through ml-2">
                ${price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[#1A2A4A] font-medium">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
