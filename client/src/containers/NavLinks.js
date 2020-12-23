import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from './Button';
import tw from 'twin.macro';
import { navigate } from 'gatsby';

const Anchor = tw.div`block px-6 mt-5 font-semibold lg:inline-block lg:mt-0 text-primary-dark`;

const NavLinks = () => {
  const nav = () => {
    console.log('masuk');
    navigate('/login/');
  };

  return (
    <nav className="flex flex-col items-center py-3 bg-transparent lg:flex-row">
      <Anchor className="relative">
        <AnchorLink href="#head">Home</AnchorLink>
      </Anchor>
      <Anchor>
        <AnchorLink href="#blog">Blog</AnchorLink>
      </Anchor>
      <Anchor>
        <AnchorLink href="#cekresi">Cek Resi</AnchorLink>
      </Anchor>
      <Anchor>
        <AnchorLink href="#cekongkir">Cek Ongkir</AnchorLink>
      </Anchor>
      <Anchor>
        <AnchorLink href="#footer">Contact</AnchorLink>
      </Anchor>
      <Button className="relative my-6 lg:my-0 lg:ml-4" size="lg" func={nav}>
        Login
      </Button>
    </nav>
  );
};

export default NavLinks;
