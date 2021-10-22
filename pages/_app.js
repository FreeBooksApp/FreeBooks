import Layout from "../components/Layout"
import Head from 'next/head'
 
function MyApp({ Component, pageProps }) {
  return (
    <>   
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )

}

export default MyApp
