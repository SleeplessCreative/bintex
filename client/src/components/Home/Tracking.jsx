import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

const Tracking = ({ resi }) => {
  return (
    <Fade bottom>
      <h1 className="py-6 text-xl text-center md:text-3xl">Informasi</h1>
      <div className="flex justify-center m-auto">
        <table className="min-w-full bg-white">
          <tbody className="text-lg bg-white text-primary-dark">
            <Row dataLeft="No Resi" dataRight={resi.receiptNumber} />
            <Row dataLeft="Status" dataRight={resi.status} />
            <Row dataLeft="Tanggal Pengiriman" dataRight={resi.shipmentDate} />
            <Row dataLeft="Pengirim" dataRight={resi.shipper} />
            <Row dataLeft="Asal" dataRight={resi.origin} />
            <Row dataLeft="Penerima" dataRight={resi.consignee} />
            <Row dataLeft="Tujuan" dataRight={resi.destination} />
          </tbody>
        </table>
      </div>
    </Fade>
  );
};

const Row = ({ dataLeft, dataRight }) => {
  const col = `w-1/2 border-b-2 py-4 px-6`;
  return (
    <tr>
      <td className={col}>{dataLeft}</td>
      <td className={col}>{dataRight}</td>
    </tr>
  );
};

export default Tracking;
