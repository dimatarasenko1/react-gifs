import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.changeSelect(this.props.id);
  }

  render() {
    if (this.props.id !== '') {
      const link = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
      return (
        <img src={link} alt="gif" className="gif selected-gif" onClick={this.handleClick} />
      );
    } else {
      return null;
    }
  }
}

export default Gif;
