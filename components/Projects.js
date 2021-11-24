const Projects = () => {
  return (
    <section className="bg-white text-black">
      <div className="container px-4 py-16 lg:py-24 mx-auto text-center">
        <h1 className="title-font text-3xl leading-relaxed mb-10 font-bold lg:text-4xl xl:text-5xl">
          {/* {contents?.section3_title?.[0]?.text} */}
          {`Projects`}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="border-md border rounded-lg hover:shadow-xl h-[250px] bg-gray-50" />
          <div className="border-md border rounded-lg hover:shadow-xl h-[250px] bg-gray-50" />
          <div className="border-md border rounded-lg hover:shadow-xl h-[250px] bg-gray-50" />
          <div className="border-md border rounded-lg hover:shadow-xl h-[250px] bg-gray-50" />
          <div className="border-md border rounded-lg hover:shadow-xl h-[250px] bg-gray-50" />
          <div className="border-md border rounded-lg hover:shadow-xl h-[250px] bg-gray-50" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
