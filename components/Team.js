const Team = () => {
  return (
    <section className="bg-black text-white">
      <div className="container px-4 py-16 lg:py-24 mx-auto text-center">
        <h1 className="title-font text-3xl leading-relaxed mb-10 font-bold lg:text-4xl xl:text-5xl">
          {`Meet the Team`}
        </h1>
        <div className="grid grid-cols-2 max-w-screen-lg container mx-auto mt-32">
          <div className="center-item">
            <div className="center-item flex-col">
              <div className="rounded-full bg-gray-50  w-[250px] h-[250px]"></div>
              <h1 className="text-xl mb-1 font-medium mt-10">
                Asher Ben Alpay
              </h1>
              <p className="text-gray-200 text-lg font-light mb-6">CEO</p>
            </div>
          </div>
          <div className="center-item">
            <div className="center-item flex-col">
              <div className="rounded-full bg-gray-50  w-[250px] h-[250px]"></div>
              <h1 className="text-xl mb-1 font-medium mt-10">Grant Imbo</h1>
              <p className="text-gray-200 text-lg font-light mb-6">
                Co Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
