import Sidebar from '../components/Sidebar'
import { getPage} from '../support/prismic'
import Seo from "../components/Seo"
import Image from 'next/image'

export default function About(res) {

  // const contents = res.response
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
      <section className="about about-wrap">
        <div className="ash"></div>
        <div className="grntx"></div>
        <div className="about-content"></div>
      </section>
    </>
  )
}


// export async function getServerSideProps() {
//   const response = await getPage("about", false)

//   return {
//     props: {response},
//   }
// }