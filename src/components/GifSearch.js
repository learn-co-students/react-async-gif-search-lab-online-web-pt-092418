
import React, { Component } from 'react';

  class GifSearch extends Component {

    state = {
      queryText: ""
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>

          <p>Enter a search term</p>
          <input id="query" type="text" value={this.state.queryText} onChange={this.handleChange}></input>
          <input type="submit" value="Find Gifs"></input>
        </form>
      );
    }

    handleChange = (e) => {
      this.setState({
        queryText: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      // debugger
      this.props.searchGif(this.state.queryText)
    }

  }

export default GifSearch;
