import React, { useContext } from 'react'
import { cryptoData } from '../../Store/DataStore'
import { Link } from 'react-router-dom'

const SingleCarouselCoin = ({coin}) => {
  const {currency} = useContext(cryptoData)
  return (
    <Link to={`/coin/${coin.id}`}><div className='h-40 w-full flex justify-center'>
      <center>
      <img src={coin.image} alt=""  className='sm:h-24 sm:w-24  h-20 w-20' />
      <h1 className='text-white mt-3'>{coin.name}  <span className={`${coin.price_change_percentage_24h>0? "text-green-600" : "text-red-600"}`}>{coin.price_change_percentage_24h}%</span>
      </h1>
      <h1 className='text-white text-2xl font-medium'>{currency=== 'INR' ? '₹' : '$'} {coin.current_price}  </h1>
      </center>
    </div></Link>
  )
}

export default SingleCarouselCoin
