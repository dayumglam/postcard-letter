import React from 'react';

export function Button({ variant = 'primary', children, className = '', ...props }) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-black hover:shadow-lg",
    secondary: "bg-white text-brand-dark border border-gray-200 hover:bg-gray-50",
    outline: "bg-transparent text-brand-dark border border-brand-dark hover:bg-brand-dark hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
