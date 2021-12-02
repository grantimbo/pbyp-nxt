import Image from "next/image";
import spinner from "../../public/icons/loader.svg";
import AsherSocial from "./AsherSocial";
import GrantSocial from "./GrantSocial";
import { useContext } from "react";
import { UserContext } from "../../support/context";

const Team = () => {
  const ctx = useContext(UserContext);
  const { contents } = ctx;

  return (
    <section>
      <div className="container px-4 py-16 lg:py-24 mx-auto text-center">
        {!contents ? (
          <div className="w-full h-[40vh] flex items-center justify-center">
            <Image src={spinner} width={70} height={70} alt="loading..." />
          </div>
        ) : (
          <>
            <h1 className="title-type">{contents?.team_title?.[0]?.text}</h1>
            <div className="grid grid-cols-2 max-w-screen-lg container mx-auto md:mt-32">
              <div className="center-item">
                <div className="center-item flex-col">
                  <div className="rounded-full bg-gray-light w-[150px] h-[150px] md:w-[260px] md:h-[260px]">
                    <img
                      className="object-cover"
                      src={contents?.asher?.url}
                      width={contents?.asher?.dimensions?.width}
                      height={contents?.asher?.dimensions?.height}
                      quality={100}
                      alt="Powered by Pen - Asher"
                      layout="responsive"
                    />
                  </div>
                  <h1 className="text-xl mb-1 font-medium mt-10 md:text-2xl">
                    Asher Ben Alpay
                  </h1>
                  <p className="text-gray-500 md:text-xl font-light mb-6">
                    {contents?.asher_title?.[0]?.text}
                  </p>

                  <AsherSocial />
                </div>
              </div>
              <div className="center-item">
                <div className="center-item flex-col">
                  <div className="rounded-full bg-gray-light w-[150px] h-[150px] md:w-[260px] md:h-[260px]">
                    <img
                      className="object-cover"
                      src={contents?.grant?.url}
                      width={contents?.grant?.dimensions?.width}
                      height={contents?.grant?.dimensions?.height}
                      quality={100}
                      alt="Powered by Pen - Grant"
                      layout="responsive"
                    />
                  </div>
                  <h1 className="text-xl mb-1 font-medium mt-10 md:text-2xl">
                    Grant Imbo
                  </h1>
                  <p className="text-gray-500 md:text-xl font-light mb-6">
                    {contents?.grant_title?.[0]?.text}
                  </p>
                  <GrantSocial />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Team;
