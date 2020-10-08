import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log(navbarOpen);
  return (
    <header className="flex items-center justify-between flex-wrap bg-accent-light py-6 px-32">
      <div className="block lg:hidden transform">
        <button
          className="flex items-center px-3 py-2 hover:text-black hover:border-black"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          navbarOpen ? 'flex' : 'hidden'
        }
        `}
      >
        <div className="text-lg lg:flex-grow">
          <AnchorLink
            className="block px-6 mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold"
            href="#"
          >
            Home
          </AnchorLink>
          <AnchorLink
            className="block px-6 mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold"
            href="#"
          >
            Blog
          </AnchorLink>
          <AnchorLink
            className="block px-6 mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold"
            href="#"
          >
            Cek Resi
          </AnchorLink>
          <AnchorLink
            className="block px-6 mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold"
            href="#"
          >
            Cek Ongkir
          </AnchorLink>
          <AnchorLink
            className="block px-6 mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold"
            href="#"
          >
            Contact
          </AnchorLink>
        </div>
        <div className="md:block">
          <Button className="text-sm">Loading..</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
