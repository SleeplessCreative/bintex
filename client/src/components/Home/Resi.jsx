import React, { useState } from 'react';
import axios from 'axios';

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
      .post('http://localhost:8000/api/invoice/get-receipts', {
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

  console.log(resi.receipt);
  return (
    <>
      <section id="cekresi" className="py-20 lg:py-40 bg-primary-light">
        <h1 className="text-4xl text-center">Cek Resi</h1>
        <div class="leading-loose content-center bg-primary-light">
          <form method="POST" className="text-center m-auto items-center content-center">
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
        {resi.receipt ? (
          <div>
            <div className="container m-auto justify-center bg-primary-default pt-5">
              <h1 className="text-6x1 text-center pb-4">Informasi</h1>
              <table className="justify-center m-auto ">
                <tbody>
                  <tr className="bg-primary-light">
                    <td className="border px-4 py-2 w-3/5">No Resi</td>
                    <td className="border px-4 py-2">{resi.receiptNumber}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">Status</td>
                    <td className="border px-4 py-2">{resi.status}</td>
                  </tr>
                  <tr className="bg-primary-light">
                    <td className="border px-4 py-2">Tanggal Pengiriman</td>
                    <td className="border px-4 py-2">{resi.shipmentDate}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">Pengirim</td>
                    <td className="border px-4 py-2">{resi.shipper}</td>
                  </tr>
                  <tr className="bg-primary-light">
                    <td className="border px-4 py-2">Asal</td>
                    <td className="border px-4 py-2">{resi.origin}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">Penerima</td>
                    <td className="border px-4 py-2">{resi.consignee}</td>
                  </tr>
                  <tr className="bg-primary-light">
                    <td className="border px-4 py-2">Tujuan</td>
                    <td className="border px-4 py-2">{resi.destination}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-accent-light w-full text-center mt-10">
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
