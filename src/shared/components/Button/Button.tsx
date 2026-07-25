// src/shared/components/Button/Button.tsx

import type { ButtonProps } from './Button.types';

const variantClasses = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',

  secondary:
    'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',

  outline:
    'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-400',

  danger:
    'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',

  success:
    'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
};

const sizeClasses = {
  sm: 'h-9 px-3 text-sm',

  md: 'h-10 px-4 text-sm',

  lg: 'h-12 px-6 text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-lg
        font-medium
        transition-colors
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}