import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../layout/Footer';
import Head from '../../components/Home/Head';
import Blog from '../../components/Home/Blog';
import Resi from '../../components/Home/Resi';
import Ongkir from '../../components/Home/Ongkir';
import Head2 from '../../components/Home/Head2';
import Head3 from '../../components/Home/Head3';
import LogoIcon from '../../ico/favicon.ico';

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
