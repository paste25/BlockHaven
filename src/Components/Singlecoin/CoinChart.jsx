import React, { useState, useEffect, useContext } from 'react'
import LineChart from './LineChart/LineChart'
import { cryptoData } from '../../Store/DataStore'
import { useParams } from 'react-router-dom'

const CoinChart = () => {
  let {id}=useParams()
  const {chartData, days, currency} = useContext(cryptoData)
  const [data, setData] = useState({})
  function convertDate(date){
    let newDate= new Date(date)
    return newDate.getDate() + "/" + (newDate.getMonth()+1)
  }

  useEffect(() => {
    setData({
      labels: chartData.map((date)=>convertDate(date[0])),
      datasets: [{
        label: id,
        data: chartData.map((price)=>price[1]),
        fill: true,
        backgroundColor : 'rgba(242, 204, 84,0.1)',
        borderColor: '#eebc1d',
        tension: 0.1,
        borderWidth: 1,
        pointRadius: 0
      }]
    });
  }, [days]);
  return (   
      <LineChart data={data} />
  )
}

export default CoinChart
