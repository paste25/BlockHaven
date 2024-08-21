import React, { useContext } from 'react'
import { cryptoData } from '../Store/DataStore'
import { Link } from 'react-router-dom'

const Header = () => {
  const {currency, setCurrency}=useContext(cryptoData)
  
  function handleCurrencyChnage(e){
    const newCurrency=e.target.value;
    setCurrency(newCurrency)
  }
  return (
    <div className='flex justify-between px-4 py-3 shadow shadow-black'>
      <Link to={"/"}><h1 className='text-[#eebc1d] font-medium text-lg'>BlockHaven</h1></Link>
      <select className='border-[0.5px] bg-transparent text-white border-gray-600 rounded-sm focus:outline-none' onChange={(e)=>handleCurrencyChnage(e)}>
        <option value="INR" className='text-black'>INR</option>
        <option value="USD" className='text-black'>USD</option>
      </select>
    </div>
  )
}

export default Header
