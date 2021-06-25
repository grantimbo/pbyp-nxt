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