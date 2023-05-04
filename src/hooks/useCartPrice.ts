import { useContext, useEffect } from "react"
import { ProductContext } from "../components/Mall/MallMain"

const {itemsSelected} = useContext(ProductContext)

export const useCartPrice = () => {
  useEffect(()=>{
    console.log('itemsSelected changed')
  },[itemsSelected])
  
}
