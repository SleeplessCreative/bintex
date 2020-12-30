import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
  xxl: `mx-auto text-md w-full px-4 py-4`
};

const Button = ({ children, className = '', size, func }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-accent
        hover:bg-accent-dark
        text-white
    `}
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;