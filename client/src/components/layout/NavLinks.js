import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';
import tw from 'twin.macro';
import { navigate } from 'gatsby';

const Anchor = tw.div`block px-6 mt-4 font-semibold lg:inline-block lg:mt-0 text-primary-dark`;

const NavLinks = () => {
  const nav = () => {
    console.log('masuk');
    navigate('/login/');
  };

  const login = '/login/';
  return (
    <>
      <Anchor>
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
      <Button size="lg" func={nav}>
        Login
      </Button>
    </>
  );
};

export default NavLinks;
