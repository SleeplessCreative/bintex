import React, { useState } from 'react';
import { Burger, LogoIcon } from '../svg/index';
import tw from 'twin.macro';
import { NavLinks } from './index';

const NavSm = tw.div`absolute top-0 left-0 w-full mt-16 lg:hidden bg-white shadow`;
const NavLg = tw.div`hidden lg:block lg:relative lg:mt-0 lg:px-0 lg:w-auto`;

const NavScroll = 'bg-white py-4 md:py-1 shadow';
const NavState = 'bg-transparent py-4';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  //console.log(navbarOpen);

  const changeBg = () => {
    if (window.scrollY != 0) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  window.addEventListener('scroll', changeBg);

  return (
    <header
      className={`sticky top-0 z-50 ${navbarBg ? NavScroll : NavState} ${console.log(navbarBg)}`}
    >
      <div className="container px-6 mx-auto sm:px-8 lg:px-12 xl:px-16">
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
