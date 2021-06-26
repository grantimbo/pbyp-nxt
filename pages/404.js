import Head from 'next/head'
import Link from "next/link";

const Error = () => {

  return (
    <>
      <Head><title>404 - Powered by Pen</title></Head>
      <main className="page-404">
        <section>
          <Link href="/">
            <a className="logo-404"  >
              <img src="/imgs/logo.png" alt="Powered by Pen"/>
            </a>
          </Link>
          <h1>Apologies</h1>
          <p>
            The page you are looking for does not exist.<br/>
            It may have been moved, or removed altogether.<br/>
            You may return to the <Link href="/"><a >Home</a></Link>
          </p>
        </section>
      </main>
    </>
  )
}


export default Error