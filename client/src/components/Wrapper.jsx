import React from "react";
import {Outlet} from "react-router-dom"

const Wrapper = () => {
  return (
    <>
      <div className="h-screen flex">
        <div className="flex flex-col items-center justify-center text-white w-2/4 login-section">
          <h1 className="text-5xl">Welcome to</h1>
          <h3 className="text-9xl font-bold"> Live</h3>
        </div>
        <div className="w-2/4 flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
