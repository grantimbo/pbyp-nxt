import { getPage } from "../support/prismic";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Projects from "../components/Projects";
import Team from "../components/Team";
import GetQoute from "../components/GetQoute";
import Footer from "../components/Footer";

export default function Home(res) {
  const contents = res.response.results[0].data;
  console.log(contents.slideshow);

  return (
    <>
      <Seo />
      <Header />
      <Featured />
      <Projects />
      <Team />
      <GetQoute />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await getPage("YNX4NBIAACoATUBy");
  return {
    props: { response },
  };
}
