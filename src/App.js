import React, { Component } from 'react';
import './assets/css/App.css';
import { getUsers } from './action'
import { connect } from 'react-redux'
import MyListContainer from './components/MyListContainer'

class App extends Component {


componentDidMount() {
  this.props.getUsers()
}


  render() {
    // console.log("props are", this.props);
    // console.log("state is", this.state);
    return (
      <div>
        {/* <h1>Hello</h1> */}
        <MyListContainer />
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
