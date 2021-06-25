import Head from 'next/head'
import { getList } from '../support/prismic'
import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga'

const Error = ({ statusCode, response }) => {

  return (
    <>
      <Head><title>404 - Powered by Pen</title></Head>
      <section className="404">
        <a className="logo-404"  href="/">
          <img src="/imgs/logo.png" alt="Powered by Pen"/>
        </a>
        <h1>Apologies</h1>
        <p>The page you are looking for does not exist. <br/>It may have been moved, or removed altogether. <br/>You may return to the <a color="#ccc" href="<?php echo home_url(); ?>">Home</a></p>
      </section>
    </>
  )
}


export default Error