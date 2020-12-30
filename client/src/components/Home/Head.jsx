import React from 'react';
import Fade from 'react-reveal/Fade';

import { Header, SideMargin } from '../../containers/index';
import { Hero1 } from '../../svg/index';

const Head = () => {
  return (
    <>
      <div id="head" />
      <Header className="absolute top-0 z-50" />
      <div className="relative z-0 flex h-auto bg-white md:pb-40 md:py-12 max-w-screen">
        <div className={`container m-auto ${SideMargin}`}>
          <div className="grid items-center grid-cols-2 gap-7 md:grid-cols-12">
            <div className="col-span-4 px-6 text-center md:px-0 md:text-left">
              <div className="container max-w-sm py-12 mx-auto">
                <Fade left>
                  <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                    Open Your World With Us.
                  </h1>
                  <hr className="w-12 h-1 mx-auto mt-8 bg-yellow-400 rounded-full md:mx-0" />
                  <p className="mt-6 text-2xl leading-tight text-primary-dark">
                    Your new domestic cargo transporter is here!
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-span-8 pb-16 md:pb-0">
              <Fade right>
                <Hero1 />
              </Fade>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0 w-full fill-current text-accent"
          viewBox="0 0 1400 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 24C87.243 11.422 173.12 5.133 257.633 5.133 468.305 5.133 578.027 74 700 74c136.015 0 290.882-96.208 481.234-68.867C1268.807 17.71 1341.73 24 1400 24v50H0V24z" />
        </svg>
      </div>
    </>
  );
};

export default Head;
