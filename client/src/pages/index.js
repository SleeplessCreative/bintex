import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../containers/Footer';
import { Blog, Head, Head2, Head3, Resi, Ongkir } from '../components/Home/index';
import LogoIcon from '../ico/favicon.ico';

const Home = ({ children }) => {
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bintang Express Indonesia</title>
          <html lang={'en'} />
          <meta name="description" content="Jasa pengiriman paket baru buat kamu generasi baru." />
          <link rel="icon" href={LogoIcon}></link>
          <meta name="theme-color" content="#D8C7FF" />
        </Helmet>
      </div>
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
