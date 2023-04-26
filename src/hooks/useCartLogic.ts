import React, { ChangeEvent, SetStateAction, useRef, useState } from "react";

interface productType {
  category: string;
  type: string;
  color: string;
  description: string;
  img_url: string;
  price: number;
  quantity: number;
  size: number | string;

}

const useCartLogic = (
  actualQuantity: number,
  itemsSelected: productType[],
  setItemsSelected: React.Dispatch<SetStateAction<productType[]>>
) => {
  const clothSize: Record<number, string> = {
    1: "S",
    2: "M",
    3: "L",
    4: "XL",
    5: "XXL",
  };
  const [selectedColor, setSelectedColor] = useState(-1);
  const [selectedSize, setSelectedSize] = useState(-1);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const colorRef = useRef("");
  const sizeRef = useRef<number | string>(0);
  const alertMsg = useRef("");
  const priceRef = useRef<HTMLParagraphElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 0) {
      setQuantity(1);
      return;
    }
    if (parseInt(value) >= actualQuantity) {
      setQuantity(actualQuantity);
      return;
    }
    setQuantity(parseInt(value));
  };

  const addToCart = (product: productType) => {
    const { color, size } = product;
    setTimeout(() => {
      setShowAlert((showAlert) => false);
    }, 1500);
    setShowAlert((showAlert) => true);
    if (!(color && size)) {
      alertMsg.current = !color
        ? "PLEASE SELECT COLOR!"
        : "PLEASE SELECT SIZE!";
      return;
    }
    product["quantity"] = quantity;
    product["price"] = Number(priceRef.current?.textContent?.slice(1));
    setItemsSelected((prev) => [...prev, product]);
    console.log(itemsSelected, product);
    alertMsg.current = "ADDED TO CART";
  };
  return {
    showAlert,
    alertMsg,
    setShowAlert,
    colorRef,
    setSelectedColor,
    selectedColor,
    sizeRef,
    setSelectedSize,
    selectedSize,
    clothSize,
    priceRef,
    addToCart,
    quantity,
    setQuantity,
    handleChange,
  };
};

export default useCartLogic;
