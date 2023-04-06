import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, useState } from "react";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterForm from "./RegisterForm";
type showFormType = {
  showForm: boolean;
  setShowForm: Dispatch<React.SetStateAction<boolean>>;
};


const Register = (props: showFormType) => {


  return (
    <>
      <AnimatePresence>
        {props.showForm && (
          <div>
            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              className="bg-white absolute left-1/4 z-50 m-auto mt-16 p-3 h-[75vh] w-1/2 rounded-lg shadow-slate-800 shadow-2xl "
            >
              <h1 className="text-3xl  font-semibold text-center tracking-wider">
                SIGN UP
              </h1>
              <p className="text-center mt-2">Register in a snap!</p>
              <button
                onClick={() => props.setShowForm(false)}
                className="absolute top-2 text-3xl  text-slate-700  text-center  right-10"
              >
                &times;
              </button>
              <hr className="border border-slate-400 my-4" />

             <RegisterForm/>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Register;
