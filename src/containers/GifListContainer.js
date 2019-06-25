import React, { Component } from 'react';

  class GifListContainer extends Component {
    state = {
      gifsArr: []
    }

    render() {
      return (
        <div>
          {this.state.gifsArr.map(gif => gif.images.original.url)}
        </div>
      )
    }

    componentDidMount() {
      fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
      .then(res => res.json())
      .then(json => this.setState({
        gifsArr = json.data
      }))
    }

  }

export default GifListContainer
