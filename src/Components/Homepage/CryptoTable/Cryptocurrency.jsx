import React, { useContext, useState, useEffect } from 'react'
import { cryptoData } from '../../../Store/DataStore'
import Cryptorow from './Cryptorow'
import Pagination from '@mui/material/Pagination'
const LoadingBarLinear = React.lazy(() => import("../../LoadingBarLinear"));


const Cryptocurrency = () => {
  const { allCoins, currency, fetching } = useContext(cryptoData)
  let [search, setSearch] = useState('')
  let [page, setPage] = useState(1)

  function handleSearch(e) {
    setPage(1)
    setSearch(e.target.value)
  }
  function handlePageChange(event, value) {
    setPage(value)
  }

  const filteredCoins = allCoins.filter((item) => {
    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
  })

  return (
    <div className='flex flex-col items-center mt-8 sm:w-[96%] justify-center sm:mx-4'>
      <h1 className='text-white sm:text-4xl text-xl font-light'>Cryptocurrency Prices by Market Cap</h1>
      <div className='lg:w-8/12 w-full'>
        <input type="text" className='bg-transparent w-full border-gray-600 border rounded-md p-4 text-white mt-5 ' placeholder='Search For a Crypto Currency...' onChange={handleSearch} />
        <table className='rounded-t-xl w-full mt-5'>
          <thead className='bg-[#eebc1d]'>
            <tr>
              <th className='w-96 sm:text-start py-4 px-4 rounded-tl-xl sm:text-base text-xs'>Name</th>
              <th className='sm:text-end w-56 sm:text-base text-xs'>Price</th>
              <th className='sm:text-end w-56 sm:text-base text-xs'>24H Change</th>
              <th className='sm:text-end w-56 px-4 rounded-tr-xl sm:text-base text-xs'>Market Cap</th>
            </tr>
          </thead>
          <tbody className='bg-[#16171b] text-white '>
            { fetching ? <tr><td colSpan={4}><LoadingBarLinear></LoadingBarLinear></td></tr> :
              filteredCoins.slice((page - 1) * 10 , page * 10 ).map((coin, index) => (<Cryptorow coin={coin} key={index} currency={currency}></Cryptorow>))
            }
          </tbody>
        </table>
        <Pagination
          count={Math.ceil(filteredCoins.length / 10)}
          page={page}
          onChange={handlePageChange}
          sx={{
            display: 'flex',
            justifyContent: "center",
            paddingTop: '20px' ,
            color: 'white',
            '.MuiPaginationItem-root': {
              color: 'white',
            },
            '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
              backgroundColor : '#eebc1d',
          }
          }}
        />
      </div>
    </div>
  )
}

export default Cryptocurrency
