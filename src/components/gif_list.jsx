import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => <Gif id={gif.id} changeSelect={this.props.changeSelect.bind(this)} key={gif.id} />)}
      </div>
    );
  }
}

export default GifList;
