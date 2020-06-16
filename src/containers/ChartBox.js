import React, {Component} from 'react';
import ChartList from '../components/ChartList.js';
import ChartBox from '../containers/ChartBox.js'

class Chartbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [
        {
          id: 1,
          artist: "The Weeknd",
          term: "R&B/Soul",
          like_song: "Yes"
        },
        {
          id: 2,
          artist: "Surf Mesa",
          term: "Dance",
          like_song: "No"
        }
      ]
    }
    this.handleChartSubmit = this.handleChartSubmit.bind(this);
  }

  handleChartSubmit(newChart) {
    newChart.id = Date.now()
    const updatedChart = [...this.state.chart]
    this.setState({
      Chart: updatedChart
    })
  }

  render(){
    return (
      <div>
        <h2>Chart</h2>
        <ChartList chart={this.state.chart} />
      </div>
    )
  }
}

export default ChartBox;
