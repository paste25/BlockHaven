import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { cryptoData } from "../../Store/DataStore"
import CoinDesc from "./CoinDesc"
const LoadingBarLinear = React.lazy(() => import("../LoadingBarLinear"));
import CoinChart from "./CoinChart"
const LoadingBarCircular = React.lazy(() => import("../LoadingBarCircular"));



const Singlecoin = () => {
 const {getSingleCoin, coin, getHistoricalChart, currency, days, setDays} = useContext(cryptoData)
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [loadingChart, setLoadingChart] = useState(true)
  


  useEffect(()=>{
    const fetchData = async () => {
      setLoadingChart(true)
      await getHistoricalChart(id) 
      setLoadingChart(false)
    }
    fetchData()
  }, [id, currency, days])

   useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      await getSingleCoin(id)
      setLoading(false)
    }
    fetchData()
  }, [id, currency])

  
  return (
    <div className="2xl:flex ">
      { loading===true ?
      <LoadingBarLinear></LoadingBarLinear> :<>
      <CoinDesc coin={coin}></CoinDesc> 
      <div className="2xl:w-[90%] 2xl:mx-5 mt-8 relative">
      {loadingChart===true ? <div className="flex justify-center items-center h-full w-full"><LoadingBarCircular /></div>: <CoinChart></CoinChart>}
      <div className="flex justify-between lg:mx-12  text-white sm:flex-col md:flex-row flex-col mx-4">
      <button className={`lg:px-20 px-12 py-2 mt-5 border border-[#eebc1d] rounded-md ${days===7 && "bg-[#eebc1d] text-black font-medium"}`} onClick={()=>setDays(7)}>7 Days</button>
      <button className={`lg:px-20 px-12 py-2 mt-5 border border-[#eebc1d] rounded-md ${days===30 && "bg-[#eebc1d] text-black font-medium"}`} onClick={()=>setDays(30)}>30 Days</button>
      <button className={`lg:px-20 px-12 py-2 mt-5 border border-[#eebc1d] rounded-md ${days===90 && "bg-[#eebc1d] text-black font-medium"}`} onClick={()=>setDays(90)}>3 Months</button>
      <button className={`lg:px-20  px-12 py-2 mt-5 border border-[#eebc1d] rounded-md ${days===365 && "bg-[#eebc1d] text-black font-medium"}`} onClick={()=>setDays(365)}>1 year</button>
      </div>
      </div>
      </>} 
    </div>
  )
}

export default Singlecoin
