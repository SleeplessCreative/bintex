import React from 'react';
import { Footer } from '../containers/index';
import { Adress, Blog, Faq, Head, Head2, Head3, Resi, Ongkir, SEO } from '../components/Home/index';

const Home = () => {
  return (
    <>
      <SEO title="Bintang Express Delivery" />
      <Head />
      <Head2 />
      <Head3 />
      <Blog />
      <Resi />
      <Ongkir />
      <Footer />
    </>
  );
};

export default Home;
