import React from 'react'
import { connect } from 'react-redux'

const DestinationBox = props => {
  // console.log(props);

  return (
    <div>
      <h3>{props.destination.title}</h3>
      <h3>{props.destination.description}</h3>
      <h3>{props.destination.city}</h3>
      <h4>{props.destination.country}</h4>
    </div>
  )
}

// function mapStateToProps(state) {
//   return {
//     destinations: state.destinations
//   }
// }

export default DestinationBox
