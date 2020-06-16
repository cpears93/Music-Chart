import React, {Component} from 'react';

class ChartForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      term: "",
      like_song: ""
    }

    this.handleArtistChange = this.handleArtistChange.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLike_songChange = this.handleLike_songChange.bind(this)
  }

  handleArtistChange(event) {
    this.setState({artist: event.target.value})
  }

  handleTermChange(event) {
    this.setState({term: event.target.value})
  }

  handleLike_songChange(event) {
    this.setState({like_song: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = thus.state.artist.trim();
    const name = thus.state.term.trim();
    const name = thus.state.like_song.trim();
    if (!text || !name) {
      return
    }

    newChart = {
      artist: artist,
      term: term,
      like_song: like_song
    }

    this.props.onChartSubmit(newChart);

    this.setState({
      artist: "",
      term: "",
      like_song: ""
    })
  }

  render() {
    return (
      <form className="Chart-form" onSubmit={this.handleSubmit()}>
      <input
      type="text"
      placeholder="Artist"
      value={this.state.chart}
      onChange={this.handleChartChange}
      />
      <input
      type="text"
      placeholder="Term"
      value={this.state.term}
      onChange={this.handleTermChange}
      />
      <input
      type="text"
      placeholder="Like Song?"
      value={this.state.like_song}
      onChange={this.handleLike_songChange}
      />
      <Input type="submit" value="post" />
     </form>
    )
  }
}
export default ChartForm;
