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
      .catch(err => {
        console.log(err);
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
                onChange={e => setAcc({ ...acc, email: e.target.value })}
              ></input>
            </div>
            <div className="mt-4">
              <div className="relative">
                <input
                  className={`${inputStyle}`}
                  type={hide.type}
                  placeholder="password"
                  onChange={e => setAcc({ ...acc, password: e.target.value })}
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
          </form>
          <a
            href="#"
            className="block mt-4 text-xs text-center text-opacity-50 text-primary-dark hover:text-opacity-100"
          >
            Forget Password?
          </a>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <a
              href="#"
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
