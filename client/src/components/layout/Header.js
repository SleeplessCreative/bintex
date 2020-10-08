import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log(navbarOpen);
  return (
    <header className="flex items-center justify-between flex-wrap bg-accent-light py-6 px-8 sm:px-10 md:px-16 lg:px-32">
      <div class="w-8 sm:w-8 md:w-8 lg:w-10">
        <LogoIcon />
      </div>
      <div className="block lg:hidden transform">
        <button
          className="flex items-center px-3 py-2 border rounded text-black-200 border-purple-400 hover:text-black hover:border-black"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
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
          <AnchorLink className="block px-6 mt-4 lg:inline-block lg:mt-0 font-semibold" href="#">
            Home
          </AnchorLink>
          <AnchorLink className="block px-6 mt-4 lg:inline-block lg:mt-0 font-semibold" href="#">
            Blog
          </AnchorLink>
          <AnchorLink className="block px-6 mt-4 lg:inline-block lg:mt-0 font-semibold" href="#">
            Cek Resi
          </AnchorLink>
          <AnchorLink className="block px-6 mt-4 lg:inline-block lg:mt-0 font-semibold" href="#">
            Cek Ongkir
          </AnchorLink>
          <AnchorLink className="block px-6 mt-4 lg:inline-block lg:mt-0 font-semibold" href="#">
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
