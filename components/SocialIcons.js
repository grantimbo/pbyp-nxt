import Image from "next/image";
import IGicon from "../public/icons/instagram.svg";
import FBicon from "../public/icons/facebook.svg";

const SocialIcons = ({ size }) => {
  return (
    <div
      className={`flex items-center justify-center space-x-4  relative z-10 ${
        size == "small" ? "p-2" : "p-8"
      }`}
    >
      <a href="https://www.instagram.com/wearepoweredbypen" target="_blank">
        <Image
          src={IGicon}
          width={36}
          height={36}
          alt={`Poweredbypen Instagram Page`}
          title={`@wearepoweredbypen`}
        />
      </a>
      <a href="https://www.facebook.com/poweredbypen" target="_blank">
        <Image
          src={FBicon}
          width={36}
          height={36}
          alt={`Poweredbypen Facebook Page`}
          title={`Poweredbypen Facebook Page`}
        />
      </a>
    </div>
  );
};

export default SocialIcons;
