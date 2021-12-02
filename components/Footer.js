import Image from "next/image";
import spinner from "../public/icons/loader.svg";
import SocialIcons from "./SocialIcons";
import { useContext } from "react";
import { UserContext } from "../support/context";

const Footer = () => {
  const ctx = useContext(UserContext);
  const { contents } = ctx;
  return (
    <footer className="bg-[#080808]" id="footer">
      <div className="container px-4 pt-24 pb-10 mx-auto text-center">
        {!contents ? (
          <div className="w-full h-[40vh] flex items-center justify-center">
            <Image src={spinner} width={70} height={70} alt="loading..." />
          </div>
        ) : (
          <>
            <h1 className="title-type">{contents?.footer?.[0]?.text}</h1>
            <div className="text-xl md:text-4xl bg-white px-6 pt-3 pb-5 inline-block text-black rounded-md">
              {`📧 : ${contents?.email?.[0]?.text}`}
            </div>

            <h2 className="text-2xl font-light mt-20">Let's Be Friends</h2>
            <SocialIcons />
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
