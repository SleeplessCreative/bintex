import React, { useState } from 'react';
import LogoIcon from '../svg/LogoIcon';
import Burger from '../svg/Burger';
import NavLinks from './NavLinks';
import tw from 'twin.macro';

const NavSm = tw.div`absolute top-0 left-0 w-full mt-16 lg:hidden`;
const NavLg = tw.div`hidden lg:block lg:relative lg:mt-0 lg:px-0 lg:w-auto`;

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log(navbarOpen);
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container px-6 py-4 mx-auto sm:px-8 lg:px-12 xl:px-16">
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
          <NavLg>
            <NavLinks />
          </NavLg>
          {navbarOpen ? (
            <NavSm>
              <NavLinks />
            </NavSm>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
