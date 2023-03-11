import { useEffect, useState } from "react";

export const useTypewriter = () => {
  const [displayText, setDisplayText] = useState("");
  const typewriter = () => {
    const texts = [
      "Customer service is our utmost concern",
      "asdas dasd as sdf sddwa dsfg dsa fdsfg sdfsa dw erwersdf asdf sdfdsf asf dsfwer ew rewr ewr werew sdf rf sd dsf dsfefewrw ",
    ];
    texts.forEach((text: any) => {
      for (const char in text) {
        setInterval(() => {
          setDisplayText((displayText) => text);
        }, 6000);
      }
      setDisplayText("");
    });
  };
  useEffect(() => {
    typewriter();
  }, []);
  return { displayText };
};
