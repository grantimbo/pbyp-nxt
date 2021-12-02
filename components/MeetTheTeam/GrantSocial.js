import Image from "next/image";
import ASicon from "../../public/icons/artstation.svg";
import Site from "../../public/icons/website.svg";
import IGicon from "../../public/icons/instagram.svg";
import FBicon from "../../public/icons/facebook.svg";
import YTicon from "../../public/icons/youtube.svg";
import GHicon from "../../public/icons/github.svg";

const iconSize = 26;

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center space-x-4  text-white">
      <a href="https://www.grantimbo.com" target="_blank">
        <Image
          src={Site}
          width={iconSize}
          height={iconSize}
          alt={`Grant's personal website`}
          title={`www.grantimbo.com`}
        />
      </a>
      <a href="https://www.youtube.com/grantimbo" target="_blank">
        <Image
          src={YTicon}
          width={iconSize}
          height={iconSize}
          alt={`Grant's Youtube Channel`}
          title={`Grant's Youtube Channel`}
        />
      </a>
      <a href="https://www.instagram.com/grntx" target="_blank">
        <Image
          src={IGicon}
          width={iconSize}
          height={iconSize}
          alt={`@grntx`}
          title={`@grntx`}
        />
      </a>
      <a href="https://www.github.com/grantimbo" target="_blank">
        <Image
          src={GHicon}
          width={iconSize}
          height={iconSize}
          alt={`Grant's repos..`}
          title={`Grant's repos..`}
        />
      </a>
    </div>
  );
};

export default SocialIcons;
