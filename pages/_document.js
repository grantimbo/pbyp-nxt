import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/imgs/favicon.png" />
          <link rel="preload" href="/imgs/home-graphic-bg.jpg" as="image" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/icomoon/icomoon.eot?7mdbzm" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/icomoon/icomoon.ttf?7mdbzm" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/icomoon/icomoon.woff?7mdbzm" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/icomoon/icomoon.svg?7mdbzm" as="font" crossOrigin="anonymous" />
        </Head>
        <body className="bg-bluegray font-sans">
          <main className="wrap" role="main">
            <Main />
            <NextScript />
          </main>
        </body>
      </Html>
    )
  }
}

export default MyDocument