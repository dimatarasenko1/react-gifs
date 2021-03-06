import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchForm from './search_form';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "r62TBdD8aNIwU"
    };
  }

  search(query) {
    giphy('3YDFyWMPx8eSTAyXFdHnScuO0qYVBv7J').search({
      q: query,
      rating: 'g'
    }, (error, results) => {
      this.setState({
        gifs: results.data
      });
    });
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchForm searchFunction={this.search.bind(this)} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} changeSelect={this.selectGif.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
