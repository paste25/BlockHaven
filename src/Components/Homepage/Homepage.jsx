import React, { useContext }from 'react'
import banner1 from "../../assets/banner1.jpg"
import TrendingCarousel from './TrendingCarousel'
import Cryptocurrency from './CryptoTable/Cryptocurrency'
import { cryptoData } from '../../Store/DataStore'

const Homepage = () => {
  const {fetching}= useContext(cryptoData)
  return (
    <main className=' h-full mb-8'>
    <div className="h-[30rem] bg-cover bg-center" style={{ backgroundImage: `url(${banner1})` }}>
      <div className='max-w-5xl flex flex-col items-center mx-auto'>
      <div className='text-white flex flex-col items-center relative top-12'>
        <h1 className='sm:text-6xl text-3xl font-semibold text-[#eebc1d]'>BlockHaven</h1>
        <p className='text-gray-400 mt-2 sm:text-base text-xs'>Get all the Info regarding your favorite Crypto Currency</p>
      </div>
      <div className='relative top-32 xl:max-w-5xl md:max-w-3xl max-w-xs'>
      {!fetching && <TrendingCarousel></TrendingCarousel>}
      </div>
      </div>
    </div>
     <Cryptocurrency></Cryptocurrency>
    </main>
  )
}

export default Homepage
