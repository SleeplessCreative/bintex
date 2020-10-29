import React, { useState } from 'react';
import axios from 'axios';

import Button from '../../components/Button';

const Ongkir = () => {
  const [data, setData] = useState({
    origin: '',
    destination: '',
    weight: ''
  });

  const [cost, setCost] = useState({
    requested: false,
    cost: ''
  });

  // console.log(data.origin, data.destination, data.berat);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('test', data.origin, data.destination, data.weight);
    await axios
      .post('https://staging.bintex.id/api/delivery/cost', {
        origin: data.origin,
        destination: data.destination,
        weight: data.weight
      })
      .then(res => {
        const data = res.data.value;
        console.log(data);
        setCost({
          requested: true,
          cost: data
        });
        // console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log('ahaha', cost.requested);
  };

  console.log('ahaha', cost.requested);
  console.log(data.origin, data.destination, data.weight);

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
              onChange={e => setData({ ...data, origin: e.target.value })}
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
              onChange={e => setData({ ...data, destination: e.target.value })}
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
              onChange={e => setData({ ...data, weight: e.target.value })}
            />
          </div>
          <Button className="mt-2 w-full" size="lg" func={handleSubmit}>
            Cek Ongkir
          </Button>
          {cost.requested ? <div>{cost.cost}</div> : <div>kosong</div>}
        </form>
      </div>
    </section>
  );
};

export default Ongkir;
