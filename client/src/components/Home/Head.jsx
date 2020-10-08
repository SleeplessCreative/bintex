import React from 'react';

import Button from '../../components/Button';
import Illustration1 from '../../svg/Illustration1';

const Head = () => {
  return (
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
  );
};

export default Head;
