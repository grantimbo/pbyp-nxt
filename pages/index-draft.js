import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import { getPage } from "../support/prismic"
import Seo from "../components/Seo"


export default function Home(res) {

  const contents = res.response.results[0].data
  console.log(contents.slideshow)
  
  const sliderControls = (e) =>{
    let activeSlide = document.querySelector('.slides .active')
    activeSlide.classList.remove('active')
    
    if (e == "prev" ) {
      if (activeSlide == document.querySelector('.slides div:first-child')) {
        document.querySelector('.slides div:last-child').classList.add('active')
      } else {
        activeSlide.previousSibling.classList.add('active')
      }
      return
    }

    if (activeSlide == document.querySelector('.slides div:last-child')) {
      document.querySelector('.slides div:first-child').classList.add('active')
    } else {
      activeSlide.nextSibling.classList.add('active')
    }

  }

  return (
    <>
      <Seo
        seo_title={contents?.seo_title?.[0]?.text}
        seo_meta_description={contents?.seo_meta_description?.[0]?.text}
        og_type={contents?.og_type?.[0]?.text}
        og_title={contents?.og_title?.[0]?.text}
        og_description={contents?.og_description?.[0]?.text}
        og_image={contents?.og_image_url?.[0]?.text}
        og_url={contents?.og_url?.[0]?.text}
        og_site_name={contents?.og_site_name?.[0]?.text}
      />
      <Sidebar/>
      <Wrapper>
        <section className="home-wrap home active">
          <div className="home-content">
            <div className="slide-controls">
                <a className="prev-slide" onClick={() => sliderControls('prev')}><i className="icon-navigate_before"></i></a>
                <a className="next-slide" onClick={sliderControls}><i className="icon-navigate_next"></i></a>
            </div>
            <div className="slides">
              {contents.slideshow.map((post, i) => (
                <div className={`slider-container ${i == 0 ? 'active' : ''}`} key={i} style={{backgroundImage: `url(${post.image.url})`}}/>
              ))}
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}



export async function getServerSideProps() {
  const response = await getPage("YNX4NBIAACoATUBy")

  return {
    props: { response },
  };
}
