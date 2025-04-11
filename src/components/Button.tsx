import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}
const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "font-medium rounded transition-all duration-200 flex items-center justify-center";
  const variantClasses = {
    primary:
      "bg-[#D4AF37] text-[#1A2A4A] hover:bg-[#C4A027] active:bg-[#B49017]",
    secondary: "bg-[#1A2A4A] text-white hover:bg-[#2A3A5A] active:bg-[#0A1A3A]",
    outline:
      "bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 active:bg-[#D4AF37]/20",
  };
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "px-5 py-2.5",
    lg: "text-lg px-6 py-3",
  };
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${widthClass} 
        ${disabledClass}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
export default Button;
