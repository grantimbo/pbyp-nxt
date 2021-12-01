import Seo from "../components/Seo";
import Featured from "../components/Featured";
import Projects from "../components/CaseStudies";
import Services from "../components/WhatWeDo";
import MeetTheTeam from "../components/MeetTheTeam";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";

export default function Home() {
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
