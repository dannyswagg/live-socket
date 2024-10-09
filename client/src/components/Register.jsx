import React from "react";
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <>
      <div className="py-5 px-10rounded-md w-[90%]">
        <h1 className="text-5xl">Register Page</h1>
        <p className="text-xs">Already have an account?</p>
        <Link to="/">
          <button className="bg-black text-white px-5 py-1 hover:text-black border hover:bg-white hover:border">
            Login
          </button>
        </Link>
      </div>
    </>
  );
};

export default Register;
