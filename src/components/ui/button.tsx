// src/components/ui/Button.tsx
import React from "react";

// Menerima props standar dari elemen button, plus 'isLoading'
interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading = false, ...props }, ref) => {
    return (
      <button
        className={`w-full px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed ${className}`}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
