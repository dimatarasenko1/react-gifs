import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.link = `https://media.giphy.com/media/${props.id}/giphy.gif`;
  }

  render() {
    return (
      <img src={this.link} alt="gif" className="gif selected-gif" />
    );
  }
}

export default Gif;
