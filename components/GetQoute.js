const GetQoute = () => {
  return (
    <section className="bg-white text-black">
      <div className="container px-4 py-16 lg:py-24 mx-auto text-center">
        <h1 className="title-font text-3xl leading-relaxed mb-6 font-bold lg:text-4xl xl:text-5xl">
          {`Get a Qoute`}
        </h1>
        <div className="max-w-screen-sm mx-auto">
          <input
            type="email"
            className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-xl font-light w-full mb-4"
            placeholder="Email"
          />
          <textarea
            type="text"
            className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-xl font-light w-full h-32"
            placeholder="Subject"
          />
        </div>
      </div>
    </section>
  );
};

export default GetQoute;
