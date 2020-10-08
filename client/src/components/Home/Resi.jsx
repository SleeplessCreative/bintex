import React, { useState } from 'react';
import axios from 'axios';

import Search from '../../svg/Search';

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
      .post('http://localhost:8000/api/invoice/get-receipts', {
        receipt: noResi.receipt
      })
      .then(res => {
        setResi({ ...Resi, receipt: true });
        console.log(resi.receipt);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log(resi.receipt);
  return (
    <section id="cekresi" className="py-20 lg:py-40 bg-primary-light">
      <h1 className="text-4xl text-center">Cek Resi</h1>
      <div class="leading-loose content-center bg-primary-light">
        <form className="text-center m-auto items-center content-center">
          <div className="flex container items-center content-center justify-center p-8 bg-primary-light m-auto">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="p-2"
              onChange={e => setNoResi({ ...noResi, receipt: e.target.value })}
            />
            <button type="submit" className="items-center p-1 w-12" onClick={handleSubmit}>
              <Search />
            </button>
          </div>
        </form>
      </div>
      {resi.receipt ? <div>Lol</div> : <div></div>}
    </section>
  );
};

export default Resi;
