import React, { useContext, useState, useEffect } from 'react'
import parse from 'html-react-parser'
import { cryptoData } from '../../Store/DataStore'

const CoinDesc = ({coin}) => {
  const [price , setPrice] = useState()
  const [marketPrice, setMarketPrice] = useState()
  const {currency} = useContext(cryptoData)
  const description = coin?.description?.en || ''
  useEffect(() => {
    if (currency === 'INR') {
      setPrice(coin?.market_data?.current_price?.inr.toLocaleString());
      setMarketPrice(coin?.market_data?.market_cap?.inr.toLocaleString());
    } else {
      setPrice(coin?.market_data?.current_price?.usd.toLocaleString());
      setMarketPrice(coin?.market_data?.market_cap?.usd.toLocaleString());
    }
  }, [currency, coin]);

  return (
    <div className='text-white 2xl:w-6/12 ml-2 mt-8 2xl:border-r-[0.2px] 2xl:border-gray-600 text-center'>
      <div className='flex flex-col items-center my-5 '>
      <img src={coin?.image.large} alt="" className='sm:w-48 sm:h-48 w-32 h-32'/>
      <h1 className='sm:text-5xl text-4xl font-semibold'>{coin?.name}</h1>
      </div>
      <h1 className='mr-2'>{parse(description.split('. ')[0])}</h1>
      <h1 className='sm:text-2xl text-xl font-light mt-5'><span className='font-semibold'>Rank : </span>{coin?.market_cap_rank}</h1>
      <h1 className='sm:text-2xl text-xl font-light mt-5'><span className='font-semibold'>Current Price : </span> {currency==="INR"? "₹" : "$"} {price}</h1>
      <h1 className='sm:text-2xl text-xl font-light mt-5'><span className='font-semibold'>Market Cap : </span>{currency==="INR"? "₹" : "$"} {marketPrice}</h1>
    </div>
  )
}

export default CoinDesc
