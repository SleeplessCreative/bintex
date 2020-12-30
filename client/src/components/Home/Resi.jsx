import React, { useState } from 'react';
import axios from 'axios';

import { TitleSec, Button, InputColorTrans } from '../../containers/index';
import Tracking from './Tracking';
import { Arrow, Search, Reset } from '../../svg/index';

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

  const handleHideSubmit = e => {
    e.preventDefault();
    setResi({ ...Resi, receipt: false });
    setNoResi({ ...noResi, receipt: '' });
    document.getElementById('search').value = '';
  };

  // console.log(resi.receipt);
  return (
    <section id="cekresi" className="py-10 bg-white lg:py-32">
      <h3 className={TitleSec}>Cek Resi</h3>
      <div className="w-1/2 mx-auto my-6 text-gray-500">
        <section className="flex items-center justify-center h-20">
          <form method="POST" className="flex items-center justify-center w-1/2">
            <input
              id="search"
              type="search"
              name="search"
              placeholder="Search"
              className={`py-5 pl-8 pr-12 bg-primary-light ${InputColorTrans}`}
              onChange={e => setNoResi({ ...noResi, receipt: e.target.value })}
            />
            {resi.receipt ? (
              <Button
                type="reset"
                size="sm"
                className="-ml-16 transform border-none rounded-full"
                func={handleHideSubmit}
              >
                <Reset />
              </Button>
            ) : (
              <Button
                type="submit"
                size="sm"
                className="-ml-16 transform border-none rounded-full"
                func={handleSubmit}
              >
                <Search />
              </Button>
            )}
          </form>
        </section>
        {resi.receipt ? <Tracking resi={resi} /> : null}
      </div>
    </section>
  );
};

export default Resi;
