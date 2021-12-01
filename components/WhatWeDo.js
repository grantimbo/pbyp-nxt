import Image from "next/image";

const Services = () => {
  return (
    <section className="container px-4 py-16 lg:py-24 mx-auto text-center">
      <h1 className="title-type">{`What We Do`}</h1>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20 lg:gap-40">
        <div className="">
          <h2 className="text-3xl mb-1">Art Direction</h2>
          <p className="text-xl font-light text-gray-400">
            Concept Designs, Illustrations, CGI Modelling and more.
          </p>
          <div className="overflow-hidden rounded-lg hover:shadow-xl mt-6 object-cover">
            <Image
              className="object-cover"
              src="/imgs/art_direction.png"
              width={669}
              height={470}
              alt="Powered by Pen - Art Direction"
              layout="responsive"
            />
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl mb-1">Design & Development</h2>
          <p className="text-xl font-light text-gray-400">
            {/* API driven sites using latest JavaScript frameworks. */}
            Brand Identity, Web Design (UI/UX) & Development
          </p>
          <div className="overflow-hidden rounded-lg hover:shadow-xl mt-6 object-cover">
            <Image
              className="object-cover"
              src="/imgs/web_dev.png"
              width={669}
              height={470}
              alt="Powered by Pen - Web Development"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
