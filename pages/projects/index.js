import Sidebar from '../../components/Sidebar'
import Wrapper from '../../components/Wrapper'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getProjects } from '../../support/prismic'
import Seo from "../../components/Seo"
import { RichText } from 'prismic-reactjs'

const Projects = (res) => {
  
  const [modal, setmodal] = useState(false)
  const [modalcontents, setmodalcontents] = useState()

  const {results} = res.response
  const projects = results.sort((a, b) => {
    var dateA = new Date(a.data.date), dateB = new Date(b.data.date)
    return dateB - dateA;
  })

  const showModal = (e) => {
    if (e.target.nodeName != 'IMG') return
    e.preventDefault()

    let projID = e.target.parentElement.getAttribute('projectid')
    let post = projects.find(({id}) => id === projID)

    console.log(post)
    setmodalcontents(post)
    setmodal(true)

  }

  console.log(projects)
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
      <Wrapper>
        <section className="portfolio portfolio-wrap active">
          <div className="portfolio-contents">
          {projects.map((post, i) => ( 
            <figure className="project-thumb" key={i}>
              <div className="project-thumb-wrap">
                <p>{post?.data?.title?.[0]?.text}</p>
                <a href={`/projects/${post.slugs[0]}`} onClick={showModal} projectid={post.id} className="post-link">
                  <img src={post?.data?.thumbnail?.url} />
                </a>
              </div>
            </figure>
          ))}
          </div>
        </section>
      </Wrapper>
      
      {modal &&
        <div id="modal">
          <article className="project-container" data-name="" >
              <header className="project-details">
                <div onClick={() => setmodal(!modal)} className="close-modal" title="Back to project">
                  <i className="icon-close"></i>
                </div>

                <div className="project-title">{modalcontents?.data?.title?.[0]?.text}</div>
                <div className="project-desc"></div>
              </header>
              <div className="project-content">
                <RichText render={modalcontents?.data?.content}/>
              </div>
          </article>
        </div>
      }

    </>
  )
}
export async function getServerSideProps() {
  const response = await getProjects("projects")

  return {
    props: {response},
  }
}
export default Projects