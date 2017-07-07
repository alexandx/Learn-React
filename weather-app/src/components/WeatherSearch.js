const React = require('react');
const Link = require('react-router-dom').Link;
const Api = require('../utils/api');

class WeatherSearch extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    var value = event.target.value;

    this.setState(function () {
      return {
        city: value
      }
    })
  }

  handleClick(event) {
    this.props.onSubmitCity(this.state.city);

    this.setState(function () {
      return {
        city: ''
      }
    })
  }

  render() {
    return(
      <div className='weather-container' style={{flexDirection: this.props.flex}}>
        <input
          className='form-control'
          type='text'
          placeholder='Cincinnati, Ohio'
          onChange={this.handleChange}
          value={this.state.city}
        />
        <button
          className='btn btn-success'
          style={{margin: 10}}
          onClick = {this.handleClick}
          >
          Get Weather
        </button>
      </div>
    )
  }
}

module.exports = WeatherSearch;
