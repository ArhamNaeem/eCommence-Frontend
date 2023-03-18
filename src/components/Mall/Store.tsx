import React from 'react'

interface storeType {
    store: string;
}

const Store = (props:storeType) => {
  return (
    <>
      <div className=" w-full flex justify-evenly bg-black h-vh-75">
        <div className=" w-2/5  h-full bg-slate-600">
          <img
            src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk1fHxtZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="h-full"
          />
        </div>
        <div className=" w-2/5 h-full bg-slate-600"></div>
      </div>
    </>
  );
}

export default Store
