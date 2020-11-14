import React from 'react';

import Button from '../Button';
import HeroIllustration from '../../svg/HeroIllustration';

const Head = () => {
  return (
    <section id="head" className="z-0 h-auto py-40 xl:h-screen max-w-screen bg-accent-light">
      <div className="container px-4 m-auto sm:px-8 lg:px-16 xl:px-20">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-12">
          <div className="col-span-6 px-6 text-center md:px-0 md:text-left">
            <h1 className="max-w-xl text-6xl font-bold leading-tight">Open Your World With Us.</h1>
            <p className="mt-4 text-4xl leading-tight text-primary-light">
              Your New Domestic Cargo Transporter is Here!
            </p>
            <p className="my-10">
              <Button size="lg">Get Started!</Button>
            </p>
          </div>
          <div className="col-span-6">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
