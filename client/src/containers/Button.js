import React from 'react';

const sizes = {
  default: `py-3 px-8 rounded-full`,
  sm: `p-3 rounded-full`,
  lg: `py-4 px-12 rounded-full`,
  lg2: `py-5 px-8 rounded-full`,
  xl: `py-5 px-16 text-lg rounded-full`,
  xxl: `mx-auto text-md w-full px-4 py-4 rounded-full`
};

const Button = ({ children, className = '', size, func, type = '' }) => {
  return (
    <button
      type={``}
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-accent
        hover:bg-accent-dark
        text-white
        focus:outline-none
    `}
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;
