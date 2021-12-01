import Image from "next/image";
import AsherSocial from "./AsherSocial";
import GrantSocial from "./GrantSocial";

const Team = () => {
  return (
    <section>
      <div className="container px-4 py-16 lg:py-24 mx-auto text-center">
        <h1 className="title-type">{`Meet the Team`}</h1>
        <div className="grid grid-cols-2 max-w-screen-lg container mx-auto mt-32">
          <div className="center-item">
            <div className="center-item flex-col">
              <div className="rounded-full bg-gray-light w-[200px] h-[200px] md:w-[260px] md:h-[260px]">
                <Image
                  className="object-cover"
                  src="/imgs/ash.png"
                  width={394}
                  height={394}
                  quality={100}
                  alt="Powered by Pen - Asher"
                  layout="responsive"
                />
              </div>
              <h1 className="text-2xl mb-1 font-medium mt-10">
                Asher Ben Alpay
              </h1>
              <p className="text-gray-500 text-xl font-light mb-6">
                Founder & CEO
              </p>

              <AsherSocial />
            </div>
          </div>
          <div className="center-item">
            <div className="center-item flex-col">
              <div className="rounded-full bg-gray-light w-[200px] h-[200px] md:w-[260px] md:h-[260px]">
                <Image
                  className="object-cover"
                  src="/imgs/grant.png"
                  width={394}
                  height={394}
                  quality={100}
                  alt="Powered by Pen - Grant"
                  layout="responsive"
                />
              </div>
              <h1 className="text-2xl mb-1 font-medium mt-10">Grant Imbo</h1>
              <p className="text-gray-500 text-xl font-light mb-6">
                Co-Founder
              </p>
              <GrantSocial />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
