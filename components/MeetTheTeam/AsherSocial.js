import Image from "next/image";
import ASicon from "../../public/icons/artstation.svg";
import IGicon from "../../public/icons/instagram.svg";

const iconSize = 26;

const AsherIcons = () => {
  return (
    <div className="flex items-center justify-center space-x-4 text-white">
      <a href="https://www.artstation.com/artofash16" target="_blank">
        <Image
          src={ASicon}
          width={iconSize}
          height={iconSize}
          alt={`Asher's Artstation profile`}
          title={`Asher's ArtStation profile`}
        />
      </a>
      <a href="https://www.instagram.com/ash_poweredbypen" target="_blank">
        <Image
          src={IGicon}
          width={iconSize}
          height={iconSize}
          alt={`Asher's Instagram Page`}
          title={`@ash_poweredbypen`}
        />
      </a>
    </div>
  );
};

export default AsherIcons;
