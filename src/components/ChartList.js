import React, {Fragment} from 'react';
import Chart from './Chart.js'

const ChartList = (props) => {

  const commentNodes = props.chart.map((chart, index) => {
    return <Chart chart={chart} key={index} />
  });

  return (
    <Fragment>
        {commentNodes}
    </Fragment>
  )
}

export default ChartList;
