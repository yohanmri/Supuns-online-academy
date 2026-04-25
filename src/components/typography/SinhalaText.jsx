import React from 'react';

const SinhalaText = ({ children, variant = 'body', className = '', ...props }) => {
  const baseStyles = variant === 'heading' 
    ? 'font-sinhalaHead font-bold text-navy' 
    : 'font-sinhalaBody text-gray-800 leading-relaxed';

  const fontSizes = {
    h1: 'text-4xl md:text-6xl mb-6',
    h2: 'text-3xl md:text-4xl mb-4',
    h3: 'text-2xl md:text-3xl mb-3',
    body: 'text-lg md:text-xl',
    small: 'text-sm md:text-base',
  };

  const Component = ['h1', 'h2', 'h3'].includes(variant) ? variant : 'div';
  const sizeClass = fontSizes[variant] || fontSizes.body;

  return (
    <Component 
      className={`${baseStyles} ${sizeClass} ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
};

export default SinhalaText;
