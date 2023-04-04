import React, { useState } from "react";
import Logo from "../../../utils/Logo";

const SignIn = () => {
  //use zod for adding validation
  const [focused, setFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center">
        <Logo
          width={82}
          height={82}
          mt={2}
          ml={0}
          mr={2}
          textSize={"5xl"}
          textMarginTop={3}
          logoColor="black"
        />

        <div className="  bg-gray-400 shadow-md bg-opacity-5 h-[30rem] mt-3 p-3 flex flex-col items-center">
          <form action="#">
            <div className="text-slate-900 h-full  w-[40rem]  flex flex-col items-center p-10 pb-5 pt-8 ">
              <div className="mb-12 relative w-full flex justify-center">
                <label
                  className={`absolute transition-all duration-150 ${
                    focused ? "bottom-7 text-sm" : "bottom-2"
                  } left-[20%] `}
                  htmlFor="uname_email"
                >
                  Username or email
                </label>
                <input
                  onFocus={() => setFocused(true)}
                  onBlur={(e) => {
                    if (!e.target.value) setFocused(false);
                  }}
                  className={` outline-none border-b border-black w-3/5 pb-1 bg-transparent`}
                  type="email"
                  id="uname_email"
                />
              </div>
              <div className="relative w-full  flex justify-center">
                <label
                  className={`absolute transition-all duration-150 ${
                    passwordFocused ? "bottom-7 text-sm" : "bottom-2"
                  } left-[20%] `}
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={(e) => {
                    if (!e.target.value) setPasswordFocused(false);
                  }}
                  className={` outline-none border-b border-black w-3/5  pb-1 bg-transparent`}
                  type="password"
                  id="password"
                />
              </div>
              <button
                className="mt-12 border border-slate-800 w-3/5 py-2 rounded-md active:bg-slate-200"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex items-center w-[52%]">
            <hr className="border border-slate-400  flex-grow mr-1" />
            <h2 className="text-sm font-semi-bold ">or sign in with</h2>
            <hr className="border border-slate-400 flex-grow ml-1" />
          </div>
          <div className="w-full flex  justify-center">
            <button className="py-5 mx-3 w-9  transition-all hover:scale-105">
              <img
                src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
                alt="twitter"
              />
            </button>
            <button className="py-5 mx-3 w-8  transition-all hover:scale-105">
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                alt="google"
              />
            </button>

            <button
              className="py-5 w-8 mx-3 transition-all hover:scale-105"
              type="submit"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt="facebook"
              />
            </button>
          </div>
          <div className="flex items-center w-4/5">
            <hr className="border border-slate-400  flex-grow mr-1" />
            <h2 className="text-sm font-semi-bold ">New to VibeKart?</h2>
            <hr className="border border-slate-400 flex-grow ml-1" />
          </div>

          <button
            className="my-6 border border-slate-800 w-[52%] py-3 rounded-md active:bg-slate-200"
            type="submit"
          >
            Create an account
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
