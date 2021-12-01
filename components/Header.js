import Image from "next/image";
import pbypSymbol from "../public/icons/pbyp-symbol.svg";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* <header className="sticky top-0 w-full z-20 bg-white border-b"> */}
      <header className="absolute top-0 w-full text-white flex items-center justify-between flex-initial px-4 z-10">
        <div className="p-8">
          <Link href="/">
            <a className="cursor-pointer">
              <Image
                src={pbypSymbol}
                width={50}
                height={128}
                alt={`Poweredbypen Instagram Page`}
              />
            </a>
          </Link>
        </div>
        <SocialIcons />
      </header>
    </>
  );
};

export default Header;
