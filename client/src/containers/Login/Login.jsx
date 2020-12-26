import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import LogoBg from '../../svg/LogoBg';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    // console.log('test', data.origin, data.destination, data.weight);
    await axios
      .post('http://localhost:5000/api/auth/login', {
        email: data.email,
        password: data.password
      })
      .then(res => {
        console.log(res);
        // console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log('ahaha', cost.requested);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white md:bg-accent-light">
      <div className="flex bg-white">
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
          <div className="mt-4">
            <input
              className="block w-full px-8 py-4 text-primary-dark bg-primary-light"
              type="email"
              placeholder="email"
              onChange={e => setData({ ...data, email: e.target.value })}
            ></input>
          </div>
          <div className="mt-4">
            <div className="flex justify-between"></div>
            <input
              className="block w-full px-8 py-4 text-primary-dark bg-primary-light"
              type="password"
              placeholder="password"
              onChange={e => setData({ ...data, password: e.target.value })}
            ></input>
          </div>
          <div className="mt-3">
            <Button className="" size="xxl" func={handleSubmit}>
              Login
            </Button>
          </div>
          <a href="#" className="block mt-4 text-xs text-center text-opacity-50 text-primary-dark">
            Forget Password?
          </a>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <a href="#" className="text-xs text-opacity-50 uppercase text-primary-dark">
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
