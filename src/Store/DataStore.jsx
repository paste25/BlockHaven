import { createContext, useEffect, useState } from "react"
import axios from 'axios';


export let cryptoData = createContext([])

const DataStore = (props) => {
  const [currency, setCurrency] = useState("INR")
  const [trendingCoins, SetTrendingCoins] = useState([])
  const [allCoins, SetAllCoins] = useState([])
  const [coin, setCoin] = useState({})
  const [chartData, setChartData] = useState([])
  const [fetching, setFetching] = useState(true)
  const [days, setDays] = useState(30)

  const options = {
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': import.meta.env.VITE_API_KEY
    }
  };
  
  async function getTrending(){
    await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`, options)
    .then(function (response) {
      SetTrendingCoins(response.data);
      setFetching(false)
    })
  }
  async function getAllCoins(){
   await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&page=1&sparkline=false`, options)
    .then(function (response) {
      SetAllCoins(response.data)
      setFetching(false)
    })
    }

  async function getSingleCoin(id){
       await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, options)
       .then(function (response) {
        setCoin(response.data);
       })
  }

  async function getHistoricalChart(id){
       await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.toLocaleLowerCase()}&days=${days}&interval=daily`, options)
      .then(function (response) {
      setChartData(response.data.prices)
    })
  }
  
  useEffect(()=>{
    getAllCoins()
    getTrending()
  }, [currency])


  return (
    <cryptoData.Provider value={{currency, setCurrency, trendingCoins, allCoins, getSingleCoin, coin, getHistoricalChart, chartData, fetching , days, setDays}}>
      {props.children}
    </cryptoData.Provider>
  )
}

export default DataStore
