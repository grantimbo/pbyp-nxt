import Seo from "../components/Seo"
import Sidebar from '../components/Sidebar'
import { getPage} from '../support/prismic'
import { RichText } from 'prismic-reactjs'

export default function Contact(res) {

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
      <section className="contact contact-wrap">
        <div className="contact-content"></div>
        <div className="pbyplogo"></div>
      </section>
    </>
  )
}

// export async function getServerSideProps() {
//   const response = await getPage("contact", false)

//   return {
//     props: {response},
//   }
// }