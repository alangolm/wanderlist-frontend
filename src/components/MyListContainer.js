import React, { Component } from 'react'
import DestinationBox from './DestinationBox'
// import NewDestinationForm from './NewDestinationForm'
import { connect } from 'react-redux'
import { getDestinations } from '../action'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

class MyListContainer extends Component {

  styles = theme => ({
    root: {
      flexGrow: 1,
    }
  })

  componentDidMount() {
    this.props.getDestinations()
  }

  render() {
    const { classes } = this.props

    const destinations = this.props.destinations.map(dest => {
      return <DestinationBox key={dest.id} destination={dest} />
    })

    return (
    <div>
      <h1 className="my-list-header">Destinations/Events:</h1>
          <Link to="/new_destination"><Button className="add-dest-button-list">Add Destination</Button></Link><br /><br /><br />
        <Grid container spacing={24} >
          {this.props.destinations.length > 0 ? destinations : null}
        </Grid>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    destinations: state.destinations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDestinations: () => dispatch(getDestinations())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyListContainer)
