import React from 'react';

import Button from '../../components/Button';
import Search from '../../svg/Search';

const Resi = () => {
  return (
    <section id="cekresi" className="py-20 lg:py-40 bg-primary-light">
      <h1 className="text-4xl text-center">Cek Resi</h1>
      <div class="leading-loose content-center bg-primary-light">
        <form className="text-center m-auto items-center content-center">
          <div className="flex container items-center content-center justify-center p-8 bg-primary-light m-auto">
            <input type="search" name="search" placeholder="Search" className="p-2" />
            <button type="submit" className="items-center p-1 w-12">
              <Search />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Resi;
