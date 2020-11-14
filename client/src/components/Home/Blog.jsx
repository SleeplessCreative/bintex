import React from 'react';

import Button from '../../components/Button';

const Blog = () => {
  return (
    <section id="blog" className="py-20 lg:py-40 bg-primary-light">
      <div className="mx-6 md:flex md:mx-auto max-w-2lg md:max-w-4xl">
        <img
          className="object-cover w-full h-full md:w-6/12"
          src="https://images.unsplash.com/photo-1585776462170-f6f0e680e1c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="bag"
        ></img>
        <div className="w-full px-10 py-6 bg-white md:w-2/3">
          <div className="flex items-center">
            <h2 className="mr-auto text-4xl">COVID-19</h2>
          </div>
          <p className="mt-4 text-xl text-primary">
            The virus that causes COVID-19 is mainly transmitted through droplets generated when an
            infected person coughs, sneezes, or exhales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
