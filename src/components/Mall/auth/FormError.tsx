import React from 'react'

interface errorType{
  error: string | undefined;
}

const FormError = (props:errorType) => {
  return (
    <>
      <div className="absolute text-sm text-red-900 right-0">
        {props.error}
        <b> !</b>
      </div>
    
    </>
  );
}

export default FormError
