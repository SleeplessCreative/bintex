import React from 'react';

import Button from '../../components/Button';

const Ongkir = () => {
  return (
    <section id="cekongkir" className="py-20 lg:py-40 bg-white">
      <h1 className="text-4xl text-center">Cek Ongkir</h1>
      <div className="leading-loose">
        <form className="max-w-xl m-4 p-10 bg-white m-auto">
          <div className="mt-2">
            <input
              className="w-full px-5 py-3 text-gray-700 bg-primary-light"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Asal"
              aria-label=""
            />
          </div>
          <div className="mt-2">
            <input
              className="w-full px-5 py-3 text-gray-700 bg-primary-light"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Tujuan"
              aria-label=""
            />
          </div>
          <div className="mt-2">
            <input
              className="w-full px-5 py-3 text-gray-700 bg-primary-light"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Berat (Kg)"
              aria-label=""
            />
          </div>
          <Button className="mt-2 w-full" size="lg">
            Cek Ongkir
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Ongkir;
