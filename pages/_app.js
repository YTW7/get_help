import '../styles/globals.css'
import dynamic from 'next/dynamic'
const WalletConnectionProvider = dynamic(() => import('../context/WalletConnectionProvider'), {
  ssr: false,
})


function MyApp({ Component, pageProps }) {
  return (
  <>
          <WalletConnectionProvider>

          <Component {...pageProps} />

          </WalletConnectionProvider>
  </>
  )
  
}

export default MyApp
