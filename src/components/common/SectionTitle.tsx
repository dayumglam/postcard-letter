import React from 'react';

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center space-y-4 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-serif text-brand-dark tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-brand-textLight max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-2">
      <span className="relative z-10">{children}</span>
      <svg className="absolute inset-0 w-full h-full text-brand-dark opacity-80" viewBox="0 0 100 40" preserveAspectRatio="none">
        <ellipse cx="50" cy="20" rx="48" ry="18" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </span>
  );
}
