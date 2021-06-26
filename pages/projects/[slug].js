import Sidebar from '../../components/Sidebar'
import { getPost } from '../../support/prismic'
import { RichText } from 'prismic-reactjs'
import React, { useState } from 'react'
import SideBar from '../../components/SideBar'
import Seo from "../../components/Seo"

export default function Post(res) {

  
  const {results} = res.response
  const post = results[0]
  const [showTrans, setShowTrans] = useState(true)
  const [showAudio, setShowAudio] = useState(false)
  const [readMore, setReadMore] = useState(false)
  
  const readMoreBtn = (e) => {
    (readMore == false) ? e.target.innerText = 'Read Less' : e.target.innerText = 'Read More'
    setReadMore(!readMore)
  }
  return (
    <>
      <Seo
        seo_title={post?.data?.seo_title?.[0]?.text}
        seo_meta_description={post?.data?.seo_meta_description?.[0]?.text}
        og_type={post?.data?.og_type?.[0]?.text}
        og_title={post?.data?.og_title?.[0]?.text}
        og_description={post?.data?.og_description?.[0]?.text}
        og_image={post?.data?.og_image_url?.[0]?.text}
        og_url={post?.data?.og_url?.[0]?.text}
        og_site_name={post?.data?.og_site_name?.[0]?.text}
      />
      <Sidebar/>
      <main className="px-4 md:py-10 md:grid md:gap-10 md:grid-cols-channel lg:container lg:mx-auto lg:px-4 ">
        <article className="py-10 lg:py-0">
          {post ?
            <>
              <h1 className="text-black block text-2xl leading-snug mb-3 md:text-2xl md:font-medium">{post?.data?.title?.[0]?.text}</h1>
              <p className="text-sm mb-2">Daniel Audunsson</p>
              <div className="mb-3">

              </div>

              {!post?.data?.youtube_link?.html ?
                <img className="trs-four mb-4" src={post?.data?.thumb.url} width={post?.data?.thumb.dimensions.width} height={post?.data?.thumb.dimensions.height} alt={post?.data?.title?.[0]?.text}/>
              :
                <div className="iframe-wrap mb-4" dangerouslySetInnerHTML={{ __html: post?.data?.youtube_link.html }} />
              }
              <div className="article-content"><RichText render={post?.data?.content}/></div>

              <div className="mt-16 ">
                {post?.data?.transcript?.[0].text && <button  onClick={() => setShowTrans(!showTrans)} className={`${(showTrans == false) && 'active'} btn mb-0 text-sm inline font-light py-2 px-4`}>Transcript</button>}
                {post?.data?.audio?.url && <button onClick={() => setShowAudio(!showAudio)} className={`${(showAudio == false) && 'active'} btn mb-0 text-sm inline font-light py-2 px-4 ml-2`}>Audio</button>}
              </div>

              {post?.data?.audio?.url &&
                <div className={`${(showAudio == true) && 'active'} mp3Wrap`}>
                  <audio controls>
                      <source src={post.data.audio.url} type="audio/mpeg"/>
                      Your browser does not support the audio element.
                  </audio>
                </div>
              }

              {post?.data?.transcript?.[0].text && 
                <div className={`${(showTrans == false) && 'hidden'} relative`}>
                  <div className={`${(readMore == true) && 'active'} transcript article-content mt-6`}>
                    <RichText render={post?.data?.transcript}/>
                  </div>
                  <div className={`${(readMore == true) && 'active'} transcript-readmore`}>
                    <button onClick={readMoreBtn} className="btn py-1 px-3 text-xs m-0 mt-4 font-light">Read More</button>
                  </div>
                </div>
              }


            </>
          :
            <div className="py-32 flex items-center justify-center"><div className="loader lg animate-spin"></div></div>
          }
        </article>
        <aside >
          <SideBar/>
        </aside>
      </main>
      <Footer/>
    </>
  )
}


export async function getServerSideProps({params}) {
  const response = await getPost(params.slug, false)

  return {
    props: {response},
  }
}