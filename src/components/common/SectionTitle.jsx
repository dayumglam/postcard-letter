import React from 'react';

export function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center flex flex-col items-center justify-center ${className}`}>
      <h2 className="text-4xl md:text-5xl font-serif text-[#1c1c1c] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#666666] max-w-md mx-auto text-balance text-sm leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Highlight({ children }) {
  return (
    <span className="relative inline-block mx-1">
      <span className="relative z-10 px-2">{children}</span>
      <svg className="absolute inset-0 w-[110%] h-[150%] -left-[5%] -top-[25%] pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none">
        <path d="M50 2 C75 2, 98 10, 98 20 C98 30, 75 38, 50 38 C25 38, 2 30, 2 20 C2 10, 25 2, 50 2 Z" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="4 2" />
      </svg>
    </span>
  );
}
