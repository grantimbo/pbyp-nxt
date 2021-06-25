import Sidebar from '../components/Sidebar'
import React, { useState, useEffect } from 'react'
import { getPage} from '../support/prismic'
import { RichText } from 'prismic-reactjs'
import Seo from "../components/Seo"

export default function About(res) {

  const contents = res.response.results[0].data
  const [active, setstate] = useState(false)
  
  useEffect(() => {
    setstate(true)

    return() => {
      setstate(false)
    }
  },[])

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
      <section className={`${active == true ? 'active' : ''} about about-wrap`} >
        <div className="ash"></div>
        <div className="grntx"></div>
        <div className="about-content">
          <RichText render={contents?.content} />
        </div>
      </section>
    </>
  )
}


export async function getServerSideProps() {
  const response = await getPage("YNX4UhIAAC8ATUEB")

  return {
    props: {response},
  }
}