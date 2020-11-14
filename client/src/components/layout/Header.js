import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Burger from '../../svg/Burger';
import Button from '../Button';
import tw from 'twin.macro';

const Anchor = tw.a` 
  block px-6 mt-4 font-semibold lg:inline-block lg:mt-0
`;

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
          <div className="lg:hidden">
            <button
              className="w-6 h-6 text-primary-dark"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Burger />
            </button>
          </div>
          <nav className="hidden lg:block">
            <div className="flex items-center">
              <Anchor href="#">Home</Anchor>
              <AnchorLink
                className="block px-6 mt-4 font-semibold lg:inline-block lg:mt-0"
                href="#blog"
              >
                Blog
              </AnchorLink>
              <AnchorLink
                className="block px-6 mt-4 font-semibold lg:inline-block lg:mt-0"
                href="#cekresi"
              >
                Cek Resi
              </AnchorLink>
              <AnchorLink
                className="block px-6 mt-4 font-semibold lg:inline-block lg:mt-0"
                href="#cekongkir"
              >
                Cek Ongkir
              </AnchorLink>
              <AnchorLink
                className="block px-6 mt-4 font-semibold lg:inline-block lg:mt-0"
                href="#footer"
              >
                Contact
              </AnchorLink>
              <Button size="lg">Login</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
