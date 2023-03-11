import axios from "axios";
import { useState, useEffect } from "react";

export const useGetImage = () => {
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [img, setImg] = useState(
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  );

  useEffect(() => {
    const fetchImg = async () => {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=clothes&shoes&client_id=dFpO4dR9jaH3ESxO0Es8oOkYphn0fK6napIha1dFUqE`
      );
      let count = 0;
      data.results.map((result: any, index: number) => {
        
        const {
          urls: { full },
        } = result;
        setImgUrl((prev) => [...prev, full]);
      });
      
    };
    fetchImg();
  }, []);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setImg(imgUrl[i]);
      // console.log(imgUrl[i]);
      i = (i + 1) % imgUrl.length;
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imgUrl]);
    return {img}
};
export default useGetImage