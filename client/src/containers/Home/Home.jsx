import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Button from '../../components/Button';
import Illustration1 from '../../svg/Illustration1';
import LogoIcon from '../../ico/favicon.ico';

const Home = ({ children }) => {
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bintex</title>
          <html lang={'en'} />
          <meta name="description" content={'Coming soon!'} />
          <link rel="icon" href={LogoIcon}></link>
          <meta name="theme-color" content="#D8C7FF" />
        </Helmet>
      </div>
      <Header />
      <section className="bg-accent-light max-h-screen max-w-full justify-center">
        <div className="container mx-auto px-8 lg:flex py-10">
          <div className="self-center text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Open Your World With Us.
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-normal">
              Your New Domestic Cargo Transporter is Here!
            </p>
            <p className="mt-8 md:mt-12">
              <Button size="lg">SOON!</Button>
            </p>
          </div>
          <div className="flex-1 m-auto w-full pt-8 sm:w-9/12 md:pt-15 md:w-6/12 lg:w-1/2">
            <Illustration1 />
          </div>
        </div>
      </section>
      <section id="blog" className="py-20 lg:py-40 bg-primary-light">
        <div className="md:flex mx-6 md:mx-auto max-w-2lg md:max-w-4xl h-64">
          <img className="h-full w-full md:w-6/12 object-cover" src="https://images.unsplash.com/photo-1585776462170-f6f0e680e1c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="bag"></img>
          <div className="w-full md:w-2/3 px-10 py-6 bg-white">
              <div className="flex items-center">
                <h2 className="text-4xl mr-auto">COVID-19</h2>
              </div>
              <p className="text-xl text-primary mt-4">
              The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales.
              </p>
          </div>
        </div>
      </section>
      <section id="cekresi" className="py-20 lg:py-40 bg-primary-light">
        <h1 className="text-4xl text-center">
          Cek Resi
        </h1>
        <div class="leading-loose">
          <form className="bg-primary max-w-sm">
            <input type="search" name="serch" placeholder="Search"/>
            <button type="submit" className="">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </form>
        </div>
      </section>
      <section id="cekongkir" className="py-20 lg:py-40 bg-white">
        <h1 className="text-4xl text-center">
          Cek Ongkir
        </h1>  
        <div className="leading-loose">
          <form className="max-w-xl m-4 p-10 bg-white">
            <div className="mt-2">
              <input className="w-full px-5 py-3 text-gray-700 bg-primary-light" id="cus_name" name="cus_name" type="text" required="" placeholder="Asal" aria-label=""/>
            </div>
            <div className="mt-2">
              <input className="w-full px-5 py-3 text-gray-700 bg-primary-light" id="cus_name" name="cus_name" type="text" required="" placeholder="Tujuan" aria-label="" />
            </div>
            <div className="mt-2">
              <input className="w-full px-5 py-3 text-gray-700 bg-primary-light" id="cus_name" name="cus_name" type="text" required="" placeholder="Berat (Kg)" aria-label="" />
            </div>
            <Button className="mt-2" size="lg">Cek Ongkir</Button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
