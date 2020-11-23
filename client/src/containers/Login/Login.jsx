import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-accent-light">
      <div className="flex bg-white">
        <div className="w-full p-16">
          <h2 className="text-2xl font-semibold text-center text-gray-700">aw</h2>
          <p className="text-xl text-center text-gray-600">Welcome back!</p>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              or login with email
            </a>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Email Address</label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
              type="email"
            ></input>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
              <a href="#" className="text-xs text-gray-500">
                Forget Password?
              </a>
            </div>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
              type="password"
            ></input>
          </div>
          <div className="mt-8">
            <button className="w-full px-4 py-2 font-bold text-white bg-gray-700 rounded hover:bg-gray-600">
              Login
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <a href="#" className="text-xs text-gray-500 uppercase">
              or sign up
            </a>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
        <div className="hidden p-16 lg:block lg:w-full bg-accent"></div>
      </div>
    </div>
  );
};

export default Login;
