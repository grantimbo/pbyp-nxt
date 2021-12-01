import { getProjects } from "../../support/prismic";
import Header from "../../components/Header";
import Projects from "../../components/CaseStudies";
import ScrollTop from "../../components/ScrollTop";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function ProjectIndex() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await getProjects("projects");
    setProjects(res);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Head>
        <title>{`Powered by Pen — Projects`}</title>
      </Head>
      <Header additionalClasses="" logoSize="small" showMenus={true} />
      <Projects {...projects} />
      <Footer />
      <ScrollTop />
    </>
  );
}
