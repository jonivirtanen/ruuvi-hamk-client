import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'

const TagLine = ({ temps, times, height }) => {
  const options = {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: 'rgba(0,0,0,.2)',
          },
          ticks: {
            fontColor: '#000',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: 'rgba(0,0,0,.2)',
          },
          ticks: {
            fontColor: '#000',
          },
        },
      ],
    },
  }

  const data = {
    labels: times,
    datasets: [
      {
        label: 'Lämpötila',
        fill: false,
        lineTension: 0.3,
        backgroundColor: 'rgba(255, 0, 0,1)',
        borderColor: 'rgba(255, 0, 0,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0,0,0,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0,0,0,1)',
        pointHoverBorderColor: 'rgba(0,0,0,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: temps,
      },
    ],
  }

  return <Line data={data} options={options} height={height} />
}

TagLine.propTypes = {
  temps: PropTypes.array,
  times: PropTypes.array,
  height: PropTypes.number,
}

export default TagLine
