import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    return (
      this.props.gifs.map(gif => <Gif id={gif.id} changeSelect={this.props.changeSelect.bind(this)} key={gif.id} />)
    );
  }
}

export default GifList;
