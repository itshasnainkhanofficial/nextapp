// import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ThemeProvider } from 'styled-components'
// const theme = {
//   colors: {
//     primary: '#355C7D'
//   }
// }

// function MyApp({ Component, pageProps }) {
//   // return <Component {...pageProps} />
//   return (
//     <ThemeProvider theme={theme}>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   )
// }

// export default MyApp

// app layout


import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/layout.css'
import Head from 'next/head'
import Navbar from '../components/authworking/Navbar'
import "../styles/authworking/navbar.css"
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    // <>
    //   <Head>
    //     <title>Learning app</title>
    //   </Head>
    //   <Header />

    //   <Component {...pageProps} />

    //   <Footer />
     

    // </>
    <Provider session={pageProps.session}>

      <Head>
        <title>Learning app</title>
      </Head>
      {/* <Header />

      <Component {...pageProps} />

      <Footer /> */}
      


      {/* working with auth */}
      <Navbar/>
      <Component {...pageProps} />

      </Provider>
  )
}

export default MyApp
