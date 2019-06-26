import GifListContainer from '../containers/GifListContainer';

import React, { Component } from 'react';

  class GifSearch extends Component {

    state = {
      queryText: ""
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input id="query" type="text" value={this.state.queryText} onChange={this.handleChange}></input>
          <input type="submit"></input>
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
      debugger

      this.props.searchGif(this.state.queryText)
    }

  }

export default GifSearch;
