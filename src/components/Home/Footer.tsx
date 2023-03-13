import React from 'react'

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  }
  return (
    <>
      <div className="relative h-vh-80 bg-black">
        <p className="absolute bottom-5 text-3xl left-1/3 text-white"> Copyright &#169; {getYear()}. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer
