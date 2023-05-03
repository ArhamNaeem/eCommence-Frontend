export const CartTotal = () => {
  return (
    <>
      <div className="bottom-0 flex flex-col  items-center border-t-8 border-slate-800   left-0 w-full p-2 text-slate-800">
        <h1 className="font-bold w-5/6 text-center py-2 text-4xl mt-1">
          Price
        </h1>
        <p className="my-2 font-semibold">Total Items: 0 </p>
        <p className="mb-5 font-semibold">Total Price: $0.00 </p>
        <button className="w-9/10 bg-slate-900 text-white py-4 mb-5 rounded-md">
          Checkout
        </button>
      </div>
    </>
  );
};
