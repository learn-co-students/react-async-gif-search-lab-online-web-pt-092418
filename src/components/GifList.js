import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <div>
      <ul>
        {this.props.gifsArr.map((gif, i) => {
          return <li key={i}> <img src={gif.url} alt={gif.url} /> </li>
        }
      )}
      </ul>
      </div>
    )
  }
}

export default GifList
