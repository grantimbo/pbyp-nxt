import { useState, useEffect } from "react";

const ScrollTop = () => {
  const [scrollTopButton, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", showScrollTopButton);
    return () => {
      window.removeEventListener("scroll", showScrollTopButton);
    };
  }, []);
  const showScrollTopButton = () => {
    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    scrollTop >= 500 ? setScrollTop(true) : setScrollTop(false);
  };

  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={`${
        scrollTopButton ? "opacity-1" : "opacity-0"
      } transition-opacity fixed text-black w-14 h-14 rounded flex items-center justify-center bg-gray-50 shadow-xl cursor-pointer hover:bg-intoprofits-blue z-50 bottom-4 right-4 md:bottom-14 md:right-14 `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        className="fill-current"
      >
        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
      </svg>
    </button>
  );
};

export default ScrollTop;
