import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../support/context";

const Services = () => {
  const ctx = useContext(UserContext);
  const { contents } = ctx;

  return (
    <section className="container px-4 py-16 lg:py-24 mx-auto text-center">
      <h1 className="title-type">{contents?.services_title?.[0]?.text}</h1>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20 lg:gap-40">
        {contents?.services?.map((e) => (
          <div className="" key={e?.service?.[0]?.text}>
            <h2 className="text-3xl mb-1">{e?.service?.[0]?.text}</h2>
            <p className="text-xl font-light text-gray-400">
              {e?.description?.[0]?.text}
            </p>
            <div className="overflow-hidden rounded-lg hover:shadow-xl mt-6 object-cover">
              <img
                className="object-cover"
                src={e?.image?.url}
                width={e?.image?.dimensions?.width}
                height={e?.image?.dimensions?.height}
                alt={e?.description?.[0]?.text}
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
