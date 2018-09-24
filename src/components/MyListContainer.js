import React, { Component } from 'react'
import DestinationBox from './DestinationBox'
import NewDestinationForm from './NewDestinationForm'
import { connect } from 'react-redux'
import { getDestinations } from '../action'

class MyListContainer extends Component {

  componentDidMount() {
    this.props.getDestinations()
  }

  render() {

    const destinations = this.props.destinations.map(dest => {
      return <DestinationBox key={dest.id} destination={dest} />
    })

    return (
      <div>
        <h1>Destinations/Events:</h1>
        <button value="Add Destination">
          Add Destination
        </button>
        {this.props.destinations.length > 0 ? destinations : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    destinations: state.destinations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDestinations: () => dispatch(getDestinations())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyListContainer)