import React from 'react'

interface errorType{
  error: string | undefined;
}

const FormError = (props:errorType) => {
  return (
    <>
      <div className="absolute text-sm text-red-900 right-0">
        <b className='mx-[2px]'>!</b>{props.error}
      </div>
    </>
  );
}

export default FormError
