import React from 'react';

export function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center space-y-6 ${className}`}>
      <h2 className="text-5xl md:text-6xl font-serif text-brand-dark tracking-tight leading-[1.2]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-brand-textLight max-w-2xl mx-auto text-balance font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Highlight({ children }) {
  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10">{children}</span>
      <svg className="absolute inset-0 w-[110%] h-[120%] -left-[5%] -top-[10%] text-brand-dark opacity-60" viewBox="0 0 100 40" preserveAspectRatio="none">
        <path d="M50 2 C75 2, 98 10, 98 20 C98 30, 75 38, 50 38 C25 38, 2 30, 2 20 C2 10, 25 2, 50 2 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );
}
