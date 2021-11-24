import Image from "next/image";

const Featured = () => {
  return (
    <section className=" bg-black text-white">
      <div className="grid grid-cols-2 container mx-auto h-[70vh]">
        <div className="center-item">
          <div>
            <h1 className="text-4xl mb-1 font-medium">We are PoweredbyPen</h1>
            <p className="text-gray-200 text-2xl font-light mb-6">
              We provide quality design services.
            </p>
            <button className="bg-white text-xl font-light px-8 py-3 rounded-md text-black">
              Get in touch
            </button>
          </div>
        </div>
        <div className="center-item">
          <Image
            className="lg:mx-auto mb-0"
            width="250"
            height="479"
            src="/imgs/logo.png"
            alt="Powered by Pen"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
