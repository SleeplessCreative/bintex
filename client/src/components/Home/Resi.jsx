import React, { useState } from 'react';
import axios from 'axios';

import Tracking from './Tracking';

import Search from '../../svg/Search';
import Arrow from '../../svg/Arrow';

const Resi = () => {
  const [noResi, setNoResi] = useState({
    receipt: ''
  });
  const [resi, setResi] = useState({
    receipt: false,
    receiptNumber: '',
    status: '',
    shipmentDate: '',
    shipper: '',
    consignee: '',
    origin: '',
    destination: '',
    dropPoint: [],
    dropTime: []
  });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios
      .post('https://staging.bintex.id/api/invoice/get-receipts', {
        receipt: noResi.receipt
      })
      .then(res => {
        const data = res.data.shipmentData;
        // console.log(data);
        setResi({
          receipt: true,
          receiptNumber: data.receiptNumber,
          status: data.status,
          shipmentDate: data.shipmentDate,
          shipper: data.shipper,
          consignee: data.consignee,
          origin: data.origin,
          destination: data.destination,
          dropPoint: data.dropPoint,
          dropTime: data.dropTime
        });
        // console.log(resi);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleHideSubmit = () => {
    setResi({ ...Resi, receipt: false });
  };

  // console.log(resi.receipt);
  return (
    <>
      <section id="cekresi" className="py-20 lg:py-40 bg-primary-light">
        <h1 className="text-4xl text-center">Cek Resi</h1>
        <div className="content-center leading-loose bg-primary-light">
          <form method="POST" className="items-center content-center m-auto text-center">
            <div className="container flex items-center content-center justify-center p-8 m-auto bg-primary-light">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="p-2"
                onChange={e => setNoResi({ ...noResi, receipt: e.target.value })}
              />
              <button type="submit" className="items-center w-12 p-1" onClick={handleSubmit}>
                <Search />
              </button>
            </div>
          </form>
        </div>
        {resi.receipt ? (
          <div>
            <Tracking resi={resi} />
            <div className="w-full mt-10 text-center bg-accent-light">
              <button className="w-16" type="submit" onClick={handleHideSubmit}>
                <Arrow />
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </section>
      <section></section>
    </>
  );
};

export default Resi;
