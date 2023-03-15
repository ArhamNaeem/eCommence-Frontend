import { useEffect, useState } from "react";

export const useCarouseLogic = () => {
     const products = [
       {
         name: "Clothes",
         img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmclMjBzaG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
       },
       {
         name: "Shoes",
         img: "https://cdn.luxe.digital/media/20220626132753/on-running-sneakers-review-luxe-digital.jpg",
       },
       {
         name: "Furniture",
         img: "https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=Ko289acalSrEKwYI5sb20u2WQa7KS9L-_0Ug4u2iEmc=",
       },
       {
         name: "Cosmetics",
         img: "https://media.istockphoto.com/id/1408439145/photo/autumn-skincare-and-autumn-makeup-concept-with-beauty-products-on-table.jpg?b=1&s=170667a&w=0&k=20&c=fArXdI1Ljsh3I3bnJ5D-9-XmP2Y_tFHzWz_f6VfI1Gg=",
       },
       {
         name: "Appliances",
         img: "https://images.unsplash.com/photo-1626143508000-4b5904e5e84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlaG9sZCUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8&w=1000&q=80",
       },
       {
         name: "Decorations",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbidpgJrwfcdYs-bnOC2zwog3WxeckeIpMXg&usqp=CAU",
       },
     ];
     const [isMobile, setIsMobile] = useState(false);
     useEffect(() => {
       const handleResize = () => {
         setIsMobile(window.innerWidth < 760);
       };
       handleResize();
       window.addEventListener("resize", handleResize);
       return () => window.removeEventListener("resize", handleResize);
     }, []);
     const carouselProps = isMobile
       ? {}
       : {
           centerMode: true,
           centerSlidePercentage: 33.3,
        }; 
    return {carouselProps,products}
}