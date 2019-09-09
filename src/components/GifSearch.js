import React, {Component} from 'react';

class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {query: ""}
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getGifs(this.state.query)
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h4> Please make a selection </h4>
                    <input type="text" onChange={this.handleChange} value={this.state.query}/>
                </label>
                <input type="submit" value="Search" />
            </form>
        );
    }
}

export default GifSearch;