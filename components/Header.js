import Image from "next/image";
import pbypSymbol from "../public/icons/pbyp-symbol.svg";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = (props) => {
  const { additionalClasses = "", logoSize, showMenus = false } = props;
  const [imgW, setImgW] = useState(50);
  const [imgH, setImgH] = useState(128);

  useEffect(() => {
    if (logoSize == "small") {
      setImgW(30);
      setImgH(77);
    }
  }, []);

  return (
    <>
      <header
        className={`w-full text-white flex items-center justify-between px-4 ${additionalClasses}`}
      >
        <div className={logoSize == "small" ? "p-4" : "p-8"}>
          <Link href="/">
            <a className="cursor-pointer relative z-10">
              <Image
                src={pbypSymbol}
                width={imgW}
                height={imgH}
                alt={`Poweredbypen Instagram Page`}
              />
            </a>
          </Link>
        </div>
        {showMenus && (
          <div className="space-x-4 md:flex items-center justify-center hidden">
            <Link href="/">
              <a className="py-2 px-5 bg-white font-medium rounded-md text-lg text-black">
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a className="py-2 px-5 bg-white font-medium rounded-md text-lg text-black">
                Projects
              </a>
            </Link>
          </div>
        )}

        <SocialIcons size={logoSize} />
      </header>
    </>
  );
};

export default Header;
