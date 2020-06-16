import React from 'react';

const Chart = (props) => {
  return (
    <p>Song: {props.chart.song} - {props.chart.text}</p>
  )
}

export default Chart;
