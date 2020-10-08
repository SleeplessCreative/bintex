import React from 'react';

import Button from '../../components/Button';

const Blog = () => {
  return (
    <section id="blog" className="py-20 lg:py-40 bg-primary-light">
      <div className="md:flex mx-6 md:mx-auto max-w-2lg md:max-w-4xl">
        <img
          className="h-full w-full md:w-6/12 object-cover"
          src="https://images.unsplash.com/photo-1585776462170-f6f0e680e1c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="bag"
        ></img>
        <div className="w-full md:w-2/3 px-10 py-6 bg-white">
          <div className="flex items-center">
            <h2 className="text-4xl mr-auto">COVID-19</h2>
          </div>
          <p className="text-xl text-primary mt-4">
            The virus that causes COVID-19 is mainly transmitted through droplets generated when an
            infected person coughs, sneezes, or exhales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
