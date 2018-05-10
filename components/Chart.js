import React from 'react'
import { Bar } from 'react-chartjs-2'

const parseData = data => ({
  labels: ['Dogs %', 'Cats %', 'Hamsters %'],
  datasets: [
    {
      label: 'The polls awakening',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderWidth: 5,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data
    }
  ]
})

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  maintainAspectRatio: false
}

export default class Chart extends React.Component {
  render () {
    return (
      <Bar
        data={parseData(this.props.data)}
        width={50}
        height={100}
        options={options}
        />
    )
  }
}
