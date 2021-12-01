import React from "react";
import Image from "next/image";
import spinner from "../public/icons/loader.svg";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../support/context";

const Projects = () => {
  const [projects = [], setProjects] = useContext(UserContext);

  return (
    <section className="bg-black text-white" id="projects">
      <div className="container px-4 py-16 lg:py-24 mx-auto text-center">
        <h1 className="title-type">{`Case Studies`}</h1>
        {projects?.length === 0 ? (
          <div className="w-full h-[40vh] flex items-center justify-center">
            <Image src={spinner} width={70} height={70} alt="loading..." />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-10 lg:grid-cols-3">
              {projects?.map((e) => (
                <Link href={`/projects/${e?.slugs?.[0]}`}>
                  <a>
                    <div
                      key={e.id}
                      className=" rounded-md hover:shadow-xl h-[300px] bg-[#080808] relative object-cover overflow-hidden"
                    >
                      <img
                        src={e?.data?.thumbnail?.url}
                        width={e?.data?.dimensions?.width}
                        height={e?.data?.dimensions?.height}
                        className="object-cover h-full w-full"
                        alt={e?.data?.title[0]?.text}
                      />
                      <div className="absolute bottom-0 w-full px-4 py-2 text-left">
                        <h3>{e?.data?.title?.[0]?.text}</h3>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
