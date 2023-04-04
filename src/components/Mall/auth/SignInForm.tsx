import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, z } from "zod";
import FormError from "./FormError";

type formDT = {
  uname_email: string;
  password: string;
};

const SignInForm = () => {
  const ref = useRef("");
  const [focused, setFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const FormSchema: ZodType<formDT> = z.object({
    uname_email: z.string().email().or(z.string()),
    password: z.string().min(6),
  });

 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formDT>({ resolver: zodResolver(FormSchema) });
  const submit = (data: formDT) => {
    const { uname_email } = data
    console.log(data);
  };
  return (
    <>
        <form onSubmit={handleSubmit(submit)}>
          <div className="text-slate-900 h-full  w-[40rem]  flex flex-col items-center p-10 pb-5 pt-8 ">
            <div className="mb-12 relative w-3/5 flex justify-center">
              <label
                className={`absolute transition-all duration-150 ${
                  focused ? "bottom-7 text-sm" : "bottom-2"
                } left-0 `}
                htmlFor="uname_email"
              >
                Username or email
              </label>
              <input
                {...register("uname_email")}
                onFocus={() => setFocused(true)}
                onBlur={(e) => {
                  if (!e.target.value) setFocused(false);
                }}
                className={` outline-none border-b border-black w-full pb-1 bg-transparent`}
                type="text"
                id="uname_email"
              />
              {/* {errors.uname_email && <FormError />} */}
            </div>
            <div className="relative  w-3/5 flex justify-center">
              <label
                className={`absolute transition-all duration-150 ${
                  passwordFocused ? "bottom-7 text-sm" : "bottom-2"
                } left-0 `}
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password")}
                onFocus={() => setPasswordFocused(true)}
                onBlur={(e) => {
                  if (!e.target.value) setPasswordFocused(false);
                }}
                className={`outline-none border-b border-black w-full  pb-1 bg-transparent`}
                type="password"
                id="password"
              />
              {errors.password && (
                <FormError error={"Password must be of atleast 6 characters"} />
              )}
            </div>
            <button
              className="mt-12 border border-slate-800 w-3/5 py-2 rounded-md active:bg-slate-200"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        
    </>
  );
};

export default SignInForm;
