import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ease-out transform hover:scale-105";
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
    white: "bg-white text-brand-dark font-bold hover:bg-gray-100 shadow-lg"
  };

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};