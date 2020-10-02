import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className = "flex items-center justify-between flex-wrap bg-accent-light py-6 px-12">
    <div class="pr-8">
      <LogoIcon />
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-lg lg:flex-grow">
        <AnchorLink className="block px-6 mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold" href="#">
          Home
        </AnchorLink>
        <AnchorLink className="block px-6 mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold" href="#">
          ---
        </AnchorLink> 
        <AnchorLink className="block px-6 mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold" href="#">
          We're
        </AnchorLink> 
        <AnchorLink className="block px-6 mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold" href="#">
          Building
        </AnchorLink>
        <AnchorLink className="block px-6 mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold" href="#">
          Something!
        </AnchorLink> 
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Loading..</Button>
      </div>
    </div>
  </header>
);

export default Header;
