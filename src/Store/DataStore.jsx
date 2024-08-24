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
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': import.meta.env.VITE_API_KEY
    }
  };

  async function getTrending() {
    try {
      let response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`, options)
      let data = await response.json()
      SetTrendingCoins(data);
      setFetching(false)
    }
    catch (err) {
      console.log(err)
    }
  }
  async function getAllCoins() {
    try {
      let response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&page=1&sparkline=false`, options)
      let data = await response.json()
      SetAllCoins(data)
      setFetching(false)
    }
    catch (err) {
      console.log(err)
    }
  }

  async function getSingleCoin(id) {
    try {
      let response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
      let data = await response.json()
      setCoin(data);
    }
    catch (err) {
      console.log(err)
    }
  }

  async function getHistoricalChart(id) {
    try {
      let response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.toLocaleLowerCase()}&days=${days}&interval=daily`, options)
      let data = await response.json()
      setChartData(data.prices)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllCoins()
    getTrending()
  }, [currency])


  return (
    <cryptoData.Provider value={{ currency, setCurrency, trendingCoins, allCoins, getSingleCoin, coin, getHistoricalChart, chartData, fetching, days, setDays }}>
      {props.children}
    </cryptoData.Provider>
  )
}

export default DataStore
