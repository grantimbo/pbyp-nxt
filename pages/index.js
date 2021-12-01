import Seo from "../components/Seo";
import Featured from "../components/Featured";
import Projects from "../components/CaseStudies";
import Services from "../components/WhatWeDo";
import MeetTheTeam from "../components/MeetTheTeam";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../support/context";

export default function Home() {
  // const contents = res.response.results[0].data;
  // console.log(contents.slideshow);

  return (
    <>
      <Seo />
      <Featured />
      <Services />
      <Projects />
      <MeetTheTeam />
      <Footer />
      <ScrollTop />
    </>
  );
}

// export async function getServerSideProps() {
//   const response = await getPage("YNX4NBIAACoATUBy");
//   return {
//     props: { response },
//   };
// }
