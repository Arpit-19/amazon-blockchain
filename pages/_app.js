import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { AmazonProvider } from '../context/AmazonContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
    >
      <AmazonProvider>
        <Component {...pageProps} />
      </AmazonProvider>
    </MoralisProvider>
  )
}

export default MyApp



// Code for React Simple Hook Modal Not Working

// import { ModalProvider } from 'react-simple-hook-modal'
// <ModalProvider></ModalProvider>