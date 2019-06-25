import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <div>
          {this.props.gifsArr.map(gif => {
              return <img src={gif.url}/>
              }
          )}
      </div>
    )
  }
}

export default GifList
