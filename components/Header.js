import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
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
    <>
      <header className="sticky top-0 w-full z-20 bg-white border-b">
        <div className="lg:container lg:h-16 flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto w-full">
          <div className="flex items-center justify-between flex-initial px-4">
            <Link href="/">
              <a className="inline-flex items-center py-4 lg:py-0 w-3/4 lg:w-auto">
                PoweredbyPen
              </a>
            </Link>
            <div
              onClick={() => setMobileMenu(!mobileMenu)}
              className="cursor-pointer inline-block lg:hidden icon-menu text-3xl"
            ></div>
          </div>
          <nav
            className={`${
              mobileMenu ? "flex" : "hidden"
            } flex-col flex-1 w-full  lg:w-auto lg:flex-auto  lg:flex lg:flex-row lg:justify-end`}
          >
            <NavLinks
              class={`px-3 py-3 border-b  lg:border-b-0 lg:px-4 lg:py-5 hover:text-intoprofits-blue cursor-pointer lg:mr-2 xl:mr-4`}
            />
          </nav>
        </div>
      </header>
      {scrollTopButton && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="fixed text-white w-14 h-14 rounded flex items-center justify-center bg-gray-800 bottom-14 right-14 shadow-xl cursor-pointer hover:bg-intoprofits-blue z-50"
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
      )}
    </>
  );
};

export default Header;
