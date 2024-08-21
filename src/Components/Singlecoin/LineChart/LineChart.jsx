import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto";

const LineChart = ({data, priceType, multiAxis}) => {
  const options ={
    plugins: {
      legend :{
        display: multiAxis ? true: false,
      },
    },
    responsive : true,
    interaction:{
      mode : "index",
      intersect : false,
    }
  }
  return(
    data && data.labels && ( 
    <Line data={data} options={options} />
  ))
}

export default LineChart
