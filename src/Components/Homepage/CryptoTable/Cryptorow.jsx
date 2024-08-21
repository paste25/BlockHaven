import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Cryptorow = ({ coin, currency }) => {
  let navigate = useNavigate()

  const handleRowClick = () => {
    navigate(`/coin/${coin.id}`);
  };

  const formatNumber = (num) => {
    if(num >= 1e15){
      return (num / 1e15).toFixed(2) + 'Q'
    }else if (num >= 1e12) {
      return (num / 1e12).toFixed(2) + 'T'; 
    } else if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + 'B'; 
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + 'M'; 
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2) + 'K'; 
    } else {
      return num.toString(); 
    }
  };

  return (
   <tr className='border-b-[0.3px] border-gray-600 hover:bg-[#101114] cursor-pointer' onClick={handleRowClick}>
      <td className='py-4 px-4'>
        <div className='flex items-center justify-center sm:justify-normal flex-col sm:flex-row'>
        <img src={coin.image} alt="" className='h-12 w-12 sm:mr-4' />
        <div className='flex flex-col justify-center items-center sm:items-start sm:mt-0 mt-2'>
          <span className='font-bold'>{coin.symbol.toUpperCase()}</span>
          <span className='text-gray-400'>{coin.name}</span>
        </div>
      </div></td>
      <td className='sm:text-end text-center sm:px-4 px-1 text-sm'>{currency === 'INR' ? '₹' : '$'} {coin.current_price.toLocaleString()}</td>
      <td className={`${coin.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"} sm:text-end text-center sm:px-4 px-1 text-sm`}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
      <td className='sm:text-end text-center sm:px-4 px-1 text-sm'>{currency === 'INR' ? '₹' : '$'} {formatNumber(coin.market_cap).toLocaleString()}</td>
    </tr>
    
  )
}

export default Cryptorow
