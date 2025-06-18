import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const FilledButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', disabled = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

FilledButton.displayName = 'FilledButton';

export const OutlinedButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'disabled'>>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

OutlinedButton.displayName = 'OutlinedButton';

export default {
  FilledButton,
  OutlinedButton,
};
