import React, {Component} from 'react';


class GifSearch extends Component{ 
    constructor(props) {
        super(props)
        
      }
        state = {
          value: '',
        }
        handleSubmit = event => {
            this.setState({
                value: event.target.value
            });
        }
        handleInputChange = event => {
            this.props.doSearch(event.target.value);
            this.setState({
                search: event.target.value,
            });
        
        }
        render() {
          return (
            <form onSubmit={ event => this.doSubmit(event) }>
              Enter Search term:
              <input type="text" id="search"
                value={this.state.search}
                onChange={this.handleInputChange}
              />
            </form>
          )
        }
}  

export default GifSearch