import React from 'react';
import LogoIcon from '../svg/LogoIcon';

const Footer = () => (
  <div className="flex items-end w-full min-h-screen bg-white" id="footer">
    <footer className="w-full bg-accent-light body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium title-font md:justify-start">
            <LogoIcon />
          </a>
          <p className="mt-2 text-sm">BINTEX.ID</p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="cursor-pointer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 cursor-pointer ">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 cursor-pointer ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/3">
            <h2 className="mb-3 text-sm font-medium tracking-widest uppercase title-font">
              Navigation
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="cursor-pointer ">Blog</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer ">Cek Resi</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer ">Cek Ongkir</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <h2 className="mb-3 text-sm font-medium tracking-widest uppercase title-font">
              Contact
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="cursor-pointer ">Our Office</a>
              </li>{' '}
              <li className="mt-3">
                <a className="cursor-pointer ">Sand an Email</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer ">+628-233-69</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <h2 className="mb-3 text-sm font-medium tracking-widest uppercase title-font">
              Downloads
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="cursor-pointer ">Android</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer ">IOS</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-accent">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-white capitalize xl:text-center">
            © 2020 All rights reserved{' '}
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
