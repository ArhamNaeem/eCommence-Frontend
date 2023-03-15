import React from 'react'
import Logo from '../../utils/Logo'

const Navbar = () => {
  return (
      <>
          <div className='p-2 pb-0 bg-gradient-to-br from-black to-slate-800 flex h-20 w-full'>
        <Logo width={50} height={50} mt={1} ml={2} mr={2} textMarginTop={3} />
              
          </div>
      </>
  )
}

export default Navbar
