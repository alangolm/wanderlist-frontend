import React, { Component, Fragment } from 'react';
import './assets/css/App.css';
import { connect } from 'react-redux'
import MyListContainer from './components/MyListContainer'
import NewDestinationForm from './components/NewDestinationForm'
import { Route, Switch, withRouter } from 'react-router-dom'
import MapBox from './components/MapBox'
import Nav from './components/Nav'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/my_world" component={MapBox} />
          <Route exact path="/new_destination" component={NewDestinationForm} />
          <Route exact path="/destinations" component={MyListContainer} />
        </Switch>
      </Fragment>
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
