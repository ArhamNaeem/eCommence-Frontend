import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import useRegisterFormValidations from "../../../hooks/useRegisterFormValidations";

const RegisterForm = () => {
  const {
    handleSubmit,
    submit,
    inputFocused,
    setInputFocused,
    register,
    errors,
  } = useRegisterFormValidations();
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className="w-full flex flex-col  items-center ">
          <div className="w-full flex justify-center">
            <div className="mt-10 mx-5 relative w-2/5">
              <label
                className={`absolute transition-all duration-150 ${
                  inputFocused.name ? "bottom-8 text-sm" : "bottom-4"
                } left-0 `}
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name")}
                onFocus={() => setInputFocused({ ...inputFocused, name: true })}
                onBlur={(e) => {
                  if (!e.target.value)
                    setInputFocused({ ...inputFocused, name: false });
                }}
                className={` outline-none border-b border-black w-full pb-1 bg-transparent`}
                type="text"
                id="name"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="mt-10 mx-5 relative w-2/5">
              <label
                className={`absolute transition-all duration-150 ${
                  inputFocused.username ? "bottom-8 text-sm" : "bottom-4"
                } left-0 `}
                htmlFor="uname"
              >
                Username
              </label>
              <input
                {...register("username")}
                onFocus={() =>
                  setInputFocused({ ...inputFocused, username: true })
                }
                onBlur={(e) => {
                  if (!e.target.value)
                    setInputFocused({
                      ...inputFocused,
                      username: false,
                    });
                }}
                className={` outline-none border-b border-black w-full pb-1 bg-transparent`}
                type="text"
                id="uname"
              />
              {errors.username && <span>{errors.username.message}</span>}
            </div>
          </div>
          <div className="mt-12 mx-5 relative w-[86.5%] ">
            <label
              className={`absolute transition-all duration-150 ${
                inputFocused.email ? "bottom-7 text-sm" : "bottom-2"
              } left-0 `}
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email")}
              onFocus={() => setInputFocused({ ...inputFocused, email: true })}
              onBlur={(e) => {
                if (!e.target.value)
                  setInputFocused({ ...inputFocused, email: false });
              }}
              className={` outline-none border-b border-black w-full pb-1 bg-transparent`}
              type="email"
              id="email"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="w-full flex justify-center">
            <div className="mt-12 mx-5 relative  w-2/5">
              <label
                className={`absolute transition-all duration-150 ${
                  inputFocused.password ? "bottom-7 text-sm" : "bottom-2"
                } left-0 `}
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password")}
                onFocus={() =>
                  setInputFocused({ ...inputFocused, password: true })
                }
                onBlur={(e) => {
                  if (!e.target.value)
                    setInputFocused({
                      ...inputFocused,
                      password: false,
                    });
                }}
                className={` outline-none border-b border-black w-full pb-1 bg-transparent`}
                type="password"
                id="password"
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div className="mt-12 mx-5 relative  w-2/5">
              <label
                className={`absolute transition-all duration-150 ${
                  inputFocused.confirmPassword ? "bottom-7 text-sm" : "bottom-2"
                } left-0 `}
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                onFocus={() =>
                  setInputFocused({
                    ...inputFocused,
                    confirmPassword: true,
                  })
                }
                onBlur={(e) => {
                  if (!e.target.value)
                    setInputFocused({
                      ...inputFocused,
                      confirmPassword: false,
                    });
                }}
                className={` outline-none border-b border-black w-full pb-1 bg-transparent`}
                type="password"
                id="confirm-password"
              />
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
            </div>
          </div>

          <button
            className="mt-12 border border-slate-800 w-2/6 py-2 rounded-md active:bg-slate-200"
            type="submit"
          >
            SIGN UP
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
