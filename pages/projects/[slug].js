import Sidebar from '../../components/Sidebar'
import { getPage } from '../../support/prismic'
import { RichText } from 'prismic-reactjs'
import Wrapper from '../../components/Wrapper'
import Seo from '../../components/Seo'

export default function Post(res) {

  const contents = res.response.results[0]
  console.log(contents)

  return (
    <>
      {/* <Seo
        seo_title={post?.data?.seo_title?.[0]?.text}
        seo_meta_description={post?.data?.seo_meta_description?.[0]?.text}
        og_type={post?.data?.og_type?.[0]?.text}
        og_title={post?.data?.og_title?.[0]?.text}
        og_description={post?.data?.og_description?.[0]?.text}
        og_image={post?.data?.og_image_url?.[0]?.text}
        og_url={post?.data?.og_url?.[0]?.text}
        og_site_name={post?.data?.og_site_name?.[0]?.text}
      /> */}
      <Seo/>
      <Sidebar/>
      <Wrapper>
        <section className="portfolio portfolio-wrap active">
          <article className="project-container" data-name="" >
            <header className="project-details">
          

              <div className="project-title">{contents?.data?.title?.[0]?.text}</div>
              <div className="project-desc"></div>
            </header>
            <div className="project-content">
              <RichText render={contents?.data?.content}/>
            </div>
          </article>
        </section>
      </Wrapper>
    </>
  )
}


export async function getServerSideProps({params}) {
  const response = await getPage(params.slug)

  return {
    props: {response},
  }
}