import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import Illustration1 from '../svg/Illustration1';

export default () => (
  <Layout>
    <section className="bg-accent-light h-screen max-w-full">
      <div className="container mx-auto px-8 lg:flex">
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
        <div className="w-1/2 pt-8 md:pt-15 self-center">
          <Illustration1 />
        </div>
      </div>
    </section>
  </Layout>
);
