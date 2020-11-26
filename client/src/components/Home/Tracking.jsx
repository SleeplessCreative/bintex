import React from 'react';

const Tracking = ({ resi }) => {
  return (
    <>
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
    </>
  );
};

export default Tracking;
