import { useEffect, useState } from "react";

const useHeaderColor = () => {
  const [headerColor, setHeaderColor] = useState(false);
  function handleScroll() {
    if (window.scrollY > 8) {
      setHeaderColor("#302e2e");
    } else {
      setHeaderColor("none");
    }
  }
  //to handle shadow of header
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return headerColor;
};

export default useHeaderColor;
