import React from 'react';
import { NotFound } from '../svg/index';

const ErrorPage = () => {
  return (
    <section className="">
      <div className="flex items-center justify-center h-screen bg-accent-light">
        <div className="">
          <div className="w-64 mx-auto">
            <NotFound />
          </div>
          <div className="text-2xl text-center md:text-3xl">
            <p className="px-10 mt-12 text-white">
              Please go back{' '}
              <a href="https://bintex.id" className="font-bold text-primary-dark">
                Home
              </a>{' '}
              or call{' '}
              <a href="https://bintex.id" className="font-bold text-primary-dark">
                Customer Service
              </a>
              !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
