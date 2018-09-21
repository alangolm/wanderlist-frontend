import React, { Component } from 'react';
import './assets/css/App.css';
import { getUsers } from './action'
import { connect } from 'react-redux'

class App extends Component {


componentDidMount() {
  // fetch(url)
  // .then(res => res.json())
  // .then(data => console.log(data))
  this.props.getUsers()
}


  render() {
    console.log("props are", this.props);
    console.log("state is", this.state);
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
