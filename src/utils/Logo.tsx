import { motion } from 'framer-motion';
import React from 'react'

const Logo = (props:any) => {
  return (
    <>
      <div className="flex items-center">
        <motion.svg
          initial={{ rotate: -180 }}
          animate={{ rotate: -12 }}
          className={`ml-${props.ml} mr-${props.mr} mt-${props.mt} mb-${props.mb}`}
          // className = {`ml-8 mr-8`}
          width={props.width}
          height={props.height}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            cx="20.5"
            cy="41.5"
            r="3.5"
            fill={`${props.logoColor}`}
          />
          <motion.circle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            cx="37.5"
            cy="41.5"
            r="3.5"
            fill={`${props.logoColor}`}
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            d="M5 6L14 12L19 34H39L44 17H25"
            stroke={`${props.logoColor}`}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            d="M25 26L32.2727 26L41 26"
            stroke={`${props.logoColor}`}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </motion.svg>
        <h1
          className={`text-4xl lg:text-${props.textSize}  text-white font-semibold text-shadow-100 mt-${props.textMarginTop}`}
        >
          VibeKart
        </h1>
      </div>
    </>
  );
}

export default Logo
