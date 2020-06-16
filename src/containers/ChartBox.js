import React, {Component} from 'react';
import ChartList from '../components/ChartList.js';
import ChartBox from '../components/Chartbox.js'

class Chartbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [
        {
          id: 1,
          artist: "",
          term: "",
          like_song: ""
        }
        {
          id: 2,
          artist: "",
          term: "",
          like_song: ""
        }
        {
          id: 3,
          artist: "",
          term: "",
          like_song: ""
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
