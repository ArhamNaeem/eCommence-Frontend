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
  actualQuantity: number;
}

enum ModeValue {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

const useCartLogic = (
  itemsSelected: productType[],
  setItemsSelected: React.Dispatch<SetStateAction<productType[]>>,
  setSelectedItemQuantity: React.Dispatch<SetStateAction<number[]>>
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
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    actualQuantity: number
  ) => {
    const value = e.target.value;
    // console.log('handle change')
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

  const addToCart = (
    product: productType,
    actualQuantity: number,
    price: number,
    selectedItemQuantity: number[]
  ) => {
    const { color, size } = product;
    let ITEM_ALREADY_EXISTS = false;
    setShowAlert((showAlert) => true);
    
    setTimeout(() => {
      setShowAlert((showAlert) => false);
    }, 1000);

    if (!(color && size)) {
      alertMsg.current = !color
        ? "PLEASE SELECT COLOR!"
        : "PLEASE SELECT SIZE!";
      return;
    }
    
    itemsSelected.map((item, index) => {
      if (item.color === color && item.size === size) {
        addAlreadyExistItemQuantity(
          quantity,
          selectedItemQuantity,
          item,
          index
        );
        ITEM_ALREADY_EXISTS = true;
        return;
      }
    });
    setSelectedColor(-1);
    setSelectedSize(-1);
    setQuantity(1);
    // console.log(ITEM_ALREADY_EXISTS);
    if (ITEM_ALREADY_EXISTS) {
      alertMsg.current = "ADDED TO CART";
      return;
    }
   
    product["quantity"] = quantity;
    product["actualQuantity"] = actualQuantity;
    product["price"] = price;
    setSelectedItemQuantity((prev) => [...prev, quantity]);
    setItemsSelected((prev) => [...prev, product]);
    // console.log(itemsSelected, product);
    alertMsg.current = "ADDED TO CART";
  
  };

  const removeFromCart = (
    index: number,
    item: productType,
    selectedItemQuantity: number[]
  ) => {
    setTimeout(() => {
      setShowAlert((showAlert) => false);
    }, 1000);
    setShowAlert((showAlert) => true);
    setSelectedItemQuantity(
      selectedItemQuantity.filter((itemQuantity, i) => {
        return i !== index;
      })
    );
    setItemsSelected(
      itemsSelected.filter((selectedItem) => {
        return (
          item.size !== selectedItem.size ||
          item.img_url !== selectedItem.img_url || item.size !== selectedItem.size
          || item.color!== selectedItem.color
        );
      })
    );
    alertMsg.current = "REMOVED FROM CART";
  };

  const changeQuantity = (
    mode: ModeValue,
    selectedItemQuantity: number[],
    item: productType,
    index: number
  ) => {
    if (mode === "INCREMENT") {
      if (selectedItemQuantity[index] >= item.actualQuantity) return;
      const updatedItemQuantity = [...selectedItemQuantity];
      updatedItemQuantity[index]++;
      setSelectedItemQuantity(updatedItemQuantity);
      // console.log(index, selectedItemQuantity);
    }
    if (mode === "DECREMENT") {
      if (selectedItemQuantity[index] === 1) return;
      const updatedItemQuantity = [...selectedItemQuantity];
      updatedItemQuantity[index]--;
      // setSelectedItemQuantity(updatedItemQuantity);
    }
  };

  const addAlreadyExistItemQuantity = (
    quantity: number,
    selectedItemQuantity: number[],
    item: productType,
    index: number
  ) => {
    if (selectedItemQuantity[index] >= item.actualQuantity) return;
    const updatedItemQuantity = [...selectedItemQuantity];
    updatedItemQuantity[index] += quantity;
    if(updatedItemQuantity[index] >item.actualQuantity) {
      updatedItemQuantity[index] = item.actualQuantity;
    }
    setSelectedItemQuantity(updatedItemQuantity);
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
    removeFromCart,
    addToCart,
    quantity,
    setQuantity,
    changeQuantity,
    handleChange,
  };
};

export default useCartLogic;
