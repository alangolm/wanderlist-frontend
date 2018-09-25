import React, { Component } from 'react';
import './assets/css/App.css';
// import { getUsers } from './action'
import { connect } from 'react-redux'
import MyListContainer from './components/MyListContainer'
import NewDestinationForm from './components/NewDestinationForm'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import MapBox from './components/MapBox'

class App extends Component {

// componentDidMount() {
//   this.props.getUsers()
// }

  render() {
    return (
      <Switch>
        <Route exact path="/my_world" component={MapBox} />
        <Route exact path="/new_destination" component={NewDestinationForm} />
        <Route exact path="/destinations" component={MyListContainer} />
      </Switch>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     users: state.users
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     getUsers: () => dispatch(getUsers())
//   }
// }

export default withRouter(connect()(App));
