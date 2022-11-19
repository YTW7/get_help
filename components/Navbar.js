import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { truncate } from '../utils/string'


require('@solana/wallet-adapter-react-ui/styles.css')


const Navbar = ({ connected, publicKey}) => {
  return (
    <div>
      <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">About</a>
      <a class="mr-5 hover:text-gray-900">Contact</a>
      {/* <a class="hover:text-gray-900">Fourth Link</a> */}
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      {/* <svg src="../public/logo.png" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <img src="/logo1.png" class="w-10 h-10" alt="logo" />
      <span class="ml-3 text-xl">Get Help</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" >
      <img class="w-8 h-8 mr-2 rounded-full" src="https://cdn.icon-icons.com/icons2/2645/PNG/512/person_circle_icon_159926.png" alt=""/>
        Wallet Name
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button> */}
       <WalletMultiButton className="phantom-button" >
       <img class="w-8 h-8 mr-2 rounded-full bg-red-500" src="https://cdn.icon-icons.com/icons2/2645/PNG/512/person_circle_icon_159926.png" alt=""/>
                    <span className="text-sm font-black text-red-600">{connected ? truncate(publicKey.toString()) : 'Connect Wallet'}</span>
                </WalletMultiButton>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar