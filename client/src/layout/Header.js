import React, { useState } from 'react';
import LogoIcon from '../svg/LogoIcon';
import Burger from '../svg/Burger';
import NavLinks from './NavLinks';
import tw from 'twin.macro';

const Anchor = tw.div``;

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log(navbarOpen);
  return (
    <header className="sticky top-0 z-40 py-5 -mt-24 bg-accent-light">
      <div className="container px-8 mx-auto sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between ">
          <div className="w-10 lg:w-12">
            <LogoIcon />
          </div>
          <button
            className="w-8 text-primary-dark lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Burger />
          </button>
          {console.log(navbarOpen)}
          {navbarOpen ? (
            <nav className="flex flex-col items-center justify-center w-full h-screen justify-items-center">
              <NavLinks></NavLinks>
            </nav>
          ) : (
            <nav className="items-center hidden lg:flex">
              <NavLinks></NavLinks>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
