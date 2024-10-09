import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="py-5 px-10rounded-md w-[90%]">
        <h1 className="text-5xl"> Login Your Account</h1>
        <form action="">

        </form>
        <p className="text-xs">Don't have an account?</p>
        <Link to="/signup">
          <button className="bg-black text-white px-5 py-1 hover:text-black border hover:bg-white hover:border">Sign Up</button>
        </Link>
      </div>
    </>
  );
};

export default Login;