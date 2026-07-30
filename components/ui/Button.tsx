import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
    
    const variants = {
      primary: 'bg-accent dark:bg-accent-dark text-white rounded-full font-semibold hover:bg-accent/90 dark:hover:bg-accent-dark/90 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0 active:shadow-sm',
      secondary: 'border-2 border-ink dark:border-ink-dark text-ink dark:text-ink-dark rounded-full hover:bg-ink dark:hover:bg-ink-dark hover:text-canvas dark:hover:text-canvas-dark',
      ghost: 'text-accent dark:text-accent-dark underline-offset-4 hover:underline bg-transparent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
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
