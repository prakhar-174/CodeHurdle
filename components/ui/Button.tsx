import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'custom';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer font-bold border-2 border-[var(--border-color)]';
    
    const variants = {
      primary: 'bg-[var(--ink)] text-[var(--canvas)] rounded-full hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--shadow-color)]',
      secondary: 'bg-transparent text-[var(--ink)] rounded-full hover:bg-[var(--ink)] hover:text-[var(--canvas)]',
      ghost: 'border-transparent text-[var(--ink)] underline-offset-4 hover:underline bg-transparent',
      custom: 'rounded-full hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--shadow-color)]',
    };

    const sizes = {
      sm: 'px-5 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-10 py-4 text-lg',
    };
    
    const sizeStyle = variant === 'ghost' ? '' : sizes[size];
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizeStyle} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
