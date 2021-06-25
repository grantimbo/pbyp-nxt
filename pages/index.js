import Sidebar from "../components/Sidebar";
import Link from "next/link";
import { getPage } from "../support/prismic";
import Seo from "../components/Seo"
const Home = () => {
// export default function Home(res) {
  // const contents = {}
  return (
    <>
      {/* <Seo
        seo_title={contents?.seo_title?.[0]?.text}
        seo_meta_description={contents?.seo_meta_description?.[0]?.text}
        og_type={contents?.og_type?.[0]?.text}
        og_title={contents?.og_title?.[0]?.text}
        og_description={contents?.og_description?.[0]?.text}
        og_image={contents?.og_image_url?.[0]?.text}
        og_url={contents?.og_url?.[0]?.text}
        og_site_name={contents?.og_site_name?.[0]?.text}
      /> */}
      <Sidebar/>

      <section className="home-wrap home">
          <div className="home-content">
              <div className="slide-controls">
                  <a className="prev-slide"><i className="icon-navigate_before"></i></a>
                  <a className="next-slide"><i className="icon-navigate_next"></i></a>
              </div>
              <div className="slides"></div>
          </div>
      </section>

    </>
  );
}

export default Home


// export async function getServerSideProps() {
//   const response = await getPage("Home", true)

//   if (!response) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { response },
//   };
// }
