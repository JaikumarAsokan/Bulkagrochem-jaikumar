// ScrollToTop.jsx
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-2 z-50 p-3 rounded bg-green-500 text-white shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Scroll to Top"
      >
        <IoIosArrowUp className="text-[20px]"/>
      </button>
    )
  );
};

export default ScrollToTop;
