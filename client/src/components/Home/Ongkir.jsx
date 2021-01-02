import React, { useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import { Button, InputKota, InputColorTrans, TitleSec } from '../../containers/index';
import { Reset } from '../../svg/index';

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

  //console.log('ahaha', cost.requested);
  //console.log(data.origin, data.destination, data.weight);

  return (
    <section id="cekongkir" className="py-20 lg:py-40 bg-primary-light">
      <h3 className={TitleSec}>Cek Ongkos Kirim</h3>
      <form
        className="max-w-sm px-6 m-auto my-6 md:px-0 bg-primary-light md:max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="z-40 mt-3">
          <InputKota
            inputHolder="Kota Asal"
            parentCallback={e => setData({ ...data, origin: e })}
          />
        </div>
        <div className="z-20 mt-3">
          <InputKota
            inputHolder="Kota Tujuan"
            parentCallback={e => setData({ ...data, destination: e })}
          />
        </div>
        <div className="mt-3">
          <input
            id="input"
            className={`w-full px-8 py-5 bg-white ${InputColorTrans}`}
            placeholder="Berat (Kg)"
            onChange={e => setData({ ...data, weight: e.target.value })}
          />
        </div>
        <div className="relative">
          <Button className="relative w-full mt-4" size="lg2" type="submit">
            {cost.requested ? (
              <span className="text-xl">{cost.cost}</span>
            ) : (
              <span>Cek Ongkir</span>
            )}
          </Button>
          {cost.requested ? (
            <div
              func={handleSubmit}
              css={css`
                position: absolute;
                right: 10%;
                top: 35%;
                cursor: pointer;
                padding: 10px;
                background-color: #a4c6ff;
                border-radius: 50%;
                --text-opacity: 0.5;
                :hover {
                  --text-opacity: 1;
                  background-color: #2576ff;
                }
              `}
            >
              <Reset />
            </div>
          ) : null}
        </div>
      </form>
    </section>
  );
};

export default Ongkir;
