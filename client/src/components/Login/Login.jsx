import React, { useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { css } from '@emotion/react';
import { Button } from '../../containers/index';
import { LogoBg, Close, EyeOff, EyeOn } from '../../svg/index';

const inputStyle = `block w-full px-10 py-4 transition-colors duration-300 transform border-none rounded-full text-primary-dark focus:outline-none focus:bg-accent-light bg-primary-light`;

const Login = () => {
  const [hide, setHide] = useState({
    type: 'password'
  });

  const [status, setStatus] = useState(true);

  const [acc, setAcc] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios
      .post('https://staging.bintex.id/api/auth/login', {
        email: acc.email,
        password: acc.password
      })
      .then(res => {
        Cookies.set('acc', res.data.token, { domain: '.bintex.id', secure: true, expires: 2 });
        let token = res.data.token.substring(7);
        let detoken = jwt_decode(token);
        window.location.href = detoken.redirectUrl;
      })
      .catch(() => {
        setStatus(false);
      });
  };

  const showHide = e => {
    e.preventDefault();
    e.stopPropagation();
    setHide({ ...hide, type: hide.type === 'password' ? 'input' : 'password' });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white md:bg-accent-light">
      <div className="relative flex bg-white">
        <div
          onClick={e => window.history.back(e)}
          className="hidden md:block text-primary-dark hover:text-opacity-100"
          css={css`
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
            --text-opacity: 0.5;
            :hover {
              --text-opacity: 1;
            }
          `}
        >
          <Close />
        </div>
        <div className="min-w-full p-16">
          <div className="w-12 mx-auto mb-4 lg:w-16">
            <LogoBg />
          </div>
          <h2 className="my-3 text-2xl font-bold text-center text-primary-dark">Welcome Back!</h2>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <p href="#" className="text-xs text-center text-opacity-50 text-primary-dark">
              Login to Bintex
            </p>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative mt-4">
              <input
                className={inputStyle}
                type="email"
                placeholder="email"
                onChange={e => {
                  setAcc({ ...acc, email: e.target.value });
                  setStatus(true);
                }}
              ></input>
            </div>
            <div className="mt-4">
              <div className="relative">
                <input
                  className={`${inputStyle}`}
                  type={hide.type}
                  placeholder="password"
                  onChange={e => {
                    setAcc({ ...acc, password: e.target.value });
                    setStatus(true);
                  }}
                ></input>
                <div
                  css={css`
                    position: absolute;
                    right: 10%;
                    top: 25%;
                    cursor: pointer;
                    --text-opacity: 0.5;
                    :hover {
                      --text-opacity: 1;
                    }
                  `}
                  onClick={showHide}
                >
                  {hide.type === 'password' ? <EyeOn /> : <EyeOff />}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <Button className="" size="xxl" type="submit">
                Login
              </Button>
            </div>
            {status ? null : (
              <div
                className="relative px-4 py-3 mt-3 text-red-700 bg-red-100 rounded-full"
                role="alert"
              >
                <div
                  css={css`
                    position: absolute;
                    left: 13%;
                    top: 30%;
                  `}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="ml-5 text-sm text-center text-red-700">Wrong Email/Password!</p>
              </div>
            )}
          </form>
          <a
            href="https://bintex.id/404"
            className="block mt-4 text-xs text-center text-opacity-50 text-primary-dark hover:text-opacity-100"
          >
            Forget Password?
          </a>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <a
              href="https://bintex.id/404"
              className="text-xs text-opacity-50 uppercase text-primary-dark hover:text-opacity-100"
            >
              or sign up
            </a>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
