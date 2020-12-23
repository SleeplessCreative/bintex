import React from 'react';
import Fade from 'react-reveal/Fade';

import { Hero3 } from '../../svg/index';
import { SideMargin } from '../../containers/index';

const Head3 = () => {
  return (
    <>
      <div className="relative z-0 flex h-auto bg-white md:h-screen max-w-screen">
        <div className={`container m-auto ${SideMargin}`}>
          <div className="grid items-center grid-cols-2 gap-7 md:grid-cols-12">
            <div className="col-span-4 px-6 text-center md:px-0 md:text-left">
              <div className="container max-w-sm py-12 mx-auto">
                <Fade left>
                  <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                    Tracking Your Shipments.
                  </h1>
                  <hr className="w-12 h-1 mx-auto mt-8 bg-yellow-400 rounded-full md:mx-0" />
                  <p className="mt-6 text-2xl leading-tight text-primary-dark">
                    So you can sit and don't have to worry!
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-span-8 pb-24 md:pb-0">
              <Fade right>
                <Hero3 />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head3;
