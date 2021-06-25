import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Sidebar from '../../components/Sidebar'
import { getProjects } from '../../support/prismic'
import Seo from "../../components/Seo"
const Channel = (res) => {
  console.log(res.response)
  
  const {results} = res.response
  const initialPosts = results.sort((a, b) => {
    var dateA = new Date(a.data.date), dateB = new Date(b.data.date)
    return dateB - dateA;
  })

  console.log(initialPosts)
  return (
    <>
      <Seo
        seo_title={results[0]?.data?.seo_title?.[0]?.text}
        seo_meta_description={results[0]?.data?.seo_meta_description?.[0]?.text}
        og_type={results[0]?.data?.og_type?.[0]?.text}
        og_title={results[0]?.data?.og_title?.[0]?.text}
        og_description={results[0]?.data?.og_description?.[0]?.text}
        og_image={results[0]?.data?.og_image_url?.[0]?.text}
        og_url={results[0]?.data?.og_url?.[0]?.text}
        og_site_name={results[0]?.data?.og_site_name?.[0]?.text}
      />
      <Sidebar/> 
      <section className="portfolio portfolio-wrap active">
        <div className="portfolio-contents">
        {initialPosts.map((post, i) => ( 
          <figure className="project-thumb" key={i}>
            <div className="project-thumb-wrap">
              <p>{post?.data?.title?.[0]?.text}</p>
              <a href={`/projects/`} className="post-link">
                <img src={post?.data?.thumbnail?.url} />
              </a>
            </div>
          </figure>
        ))}
        </div>
      </section>

      <div id="modal">
        <article className="project-container" data-name="" >
            <header className="project-details">
            <a className="close-modal" title="Back to project"><i className="icon-close"></i></a>
                <div className="project-title"></div>
                <div className="project-desc"></div>
            </header>
            <section className="project-content"></section>
        </article>
      </div>

    </>
  )
}
export async function getServerSideProps() {
  const response = await getProjects("projects")

  return {
    props: {response},
  }
}
export default Channel