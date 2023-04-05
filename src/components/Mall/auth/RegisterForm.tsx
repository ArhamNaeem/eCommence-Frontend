import React from "react";

const Register = () => {
  return (
    <div className="border border-black m-auto mt-16 p-3 h-[75vh] w-1/2">
      <h1 className="text-2xl font-semibold text-center ">Sign Up</h1>
      <hr className="border border-slate-500 my-4" />
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="uname">Username</label>
          <input type="text" id="uname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
      </div>
    </div>
  );
};

export default Register;
