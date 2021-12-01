import { getProjects } from "../../support/prismic";
import Header from "../../components/Header";
import Projects from "../../components/CaseStudies";
import ScrollTop from "../../components/ScrollTop";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

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
      <div className="h-48 relative">
        <Header />
      </div>
      <Projects {...projects} />
      <Footer />
      <ScrollTop />
    </>
  );
}
