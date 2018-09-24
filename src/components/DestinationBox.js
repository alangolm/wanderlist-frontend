import React from 'react'
import { connect } from 'react-redux'

const DestinationBox = props => {
  console.log(props);

  return (
    <div>
      
    </div>
  )
}

function mapStateToProps(state) {
  return {
    destinations: state.destinations
  }
}

export default connect(mapStateToProps)(DestinationBox)
