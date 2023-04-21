import { motion } from "framer-motion";


interface msgProps{
    msg: string
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alert = (props:msgProps) => {
  return (
      <>
        
          <motion.div
              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
              exit={{y:'-100vh'}}
              className="z-50 fixed top-2 rounded-md font-bold left-[40%] bg-slate-100 shadow-black shadow-2xl h-16 w-1/3   p-1 ">
        <button
            onClick={() => props.setShowAlert((showAlert) => false)}
          className="absolute top-3 z-50 text-2xl font-normal text-slate-700 pb-3 text-center hover:shadow-lg shadow-black w-8 h-8 rounded-full right-2"
        >
          &times;
        </button>
        <p className="w-full text-2xl text-center text-slate-800 flex items-center h-full justify-center">
          {props.msg}
        </p>
      </motion.div>
    </>
  );
};

export default Alert;
