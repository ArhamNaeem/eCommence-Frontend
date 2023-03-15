export const useSellerThoughts = () => {
     const addRotation = (className: string) => {
       document.querySelector(`.${className}`)?.classList.add("-rotate-6");
     };
     const removeRotation = (className: string) => {
       document.querySelector(`.${className}`)?.classList.remove("-rotate-6");
    };
    return {addRotation,removeRotation}
}