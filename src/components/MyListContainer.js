import React, { Component } from 'react'
import AddDestinationButton from './AddDestinationButton'
import DestinationBox from './DestinationBox'
import NewDestinationForm from './NewDestinationForm'
import { connect } from 'react-redux'

class MyListContainer extends Component {
  // console.log(props);
  state = {
    clicked: false
  }

  handleClick = event => {
    // console.log("hello");
    // (this.state.clicked === false) ? null : <NewDestinationForm />
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {



    return (


      <div>
        <h1>Destinations/Events:</h1>
        {/* <h2>{props.users[0]}</h2> */}
        {/* <AddDestinationButton /> */}
        <button value="Add Destination" onClick={this.handleClick}>
          Add Destination
        </button>
        {(this.state.clicked) ? <NewDestinationForm /> : null}
        {/* <NewDestinationForm /> */}
        <DestinationBox />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(MyListContainer)
