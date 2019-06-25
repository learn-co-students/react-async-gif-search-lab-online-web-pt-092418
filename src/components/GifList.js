import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <div>
      <ul>
        {this.props.gifsArr.map(gif => {
          return <li> <img src={gif.url} /> </li>
        }
      )}
      </ul>
      </div>
    )
  }
}

export default GifList
