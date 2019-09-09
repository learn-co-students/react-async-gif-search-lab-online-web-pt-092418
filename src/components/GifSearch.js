import React, { Component } from 'react';

class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h5>Enter a keyword to find a matching gif.</h5>
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }

}

export default GifSearch;
