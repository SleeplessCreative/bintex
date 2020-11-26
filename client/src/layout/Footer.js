import React from 'react';

const Footer = () => (
  <footer id="footer" className="px-32 py-6 bg-accent-dark text-primary-light">
    <div className="flex justify-center flex-warp">
      <div className="w-full lg:w-1/3">
        <h2 className="text-lg font-semibold">BINTEX (c) 2020</h2>
      </div>
      <div className="w-full lg:w-1/3">
        <h2 className="text-lg font-semibold">Contacts</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="">08238777545</a>
          </li>
          <li>
            <a href="">customer.care@bintex.id</a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/3">
        <h2 className="text-lg font-semibold">Download</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="">Android</a>
          </li>
          <li>
            <a href="">IOS</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
