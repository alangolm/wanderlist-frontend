import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDestination } from '../action'
import DatePicker from './DatePicker'
import DestinationBox from './DestinationBox'

class NewDestinationForm extends Component {

  state = {
    title: '',
    description: '',
    city: '',
    country: '',
    date: '',
    endDate: ''
  }

  handleTitleInput = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionInput = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleCityInput = event => {
    this.setState({
      city: event.target.value
    })
  }

  handleCountryInput = event => {
    this.setState({
      country: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addDestination(this.state)
  }

  handleStartDate = startDate => {
    this.setState({
      date: startDate._d
    })
  }

  render() {
    return (
      <div>
        <h1>Add To Your Destinations!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" onChange={this.handleTitleInput} /><br />
          <textarea type="text" placeholder="Description" onChange={this.handleDescriptionInput} /><br />
          <input type="text" placeholder="City" onChange={this.handleCityInput} /><br />
          <input type="text" placeholder="Country" onChange={this.handleCountryInput} /><br />
          <DatePicker handleStartDate={this.handleStartDate} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDestination: (destinationForm) => dispatch(addDestination(destinationForm))
  }
}

export default connect(null, mapDispatchToProps)(NewDestinationForm)
