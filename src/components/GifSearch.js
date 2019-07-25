import React, {Component} from 'react';


class GifSearch extends Component{ 
    
        state = {
          value: '',
        }
        handleSubmit = event => {
            this.setState({
                value: event.target.value
            });
        handleInputChange = event => {
            this.setState({
                search: event.target.value
            });
        }
        }
        render() {
          return (
            <form onSubmit={ event => this.handleSubmit(event) }>
              Enter Search term:
              <input type="text" id="search"
                value={this.state.value}
                onChange={event => this.handleInputChange(event)}
              />
            </form>
          )
        }
}  

export default GifSearch