import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideBar from '../../components/SideBar'
import { getList } from '../../support/prismic'
import { RichText } from 'prismic-reactjs'
import { FacebookProvider, CommentsCount } from 'react-facebook'
import Seo from "../../components/Seo"
const Channel = (res) => {
  const [showPosts, setShowPosts] = useState(10)
  const loadMorePosts = () => {
    setShowPosts(showPosts+10)
  }
  const {results} = res.response
  const posts = results.sort((a, b) => {
    var dateA = new Date(a.data.date_published), dateB = new Date(b.data.date_published)
    return dateB - dateA;
  })
  const initialPosts = posts.slice(0, showPosts)
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
      <Header/> 
      <section className="portfolio portfolio-wrap">
        <div className="portfolio-contents"></div>
        <div className="portfolio-loading">
          <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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
  const response = await getList("channel")

  return {
    props: {response},
  }
}
export default Channel