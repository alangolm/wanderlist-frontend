import React from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import EditForm from './EditForm'

const styles = {
  card: {
    maxWidth: 500,
  },
  title: {
    fontSize: 35,
  }
};

const DestinationBox = props => {
  const { classes } = props

  const handleEditClick = () => {
    props.dipatch({type: 'SET_CURRENT_DESTINATION', payload: props.destination})
    // loads the modal
  }


  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom className={classes.title} variant="headline" component="h2">
            {props.destination.title}
          </Typography>
          <Typography component="p">
            {props.destination.description}
          </Typography><br />
          {(props.destination.state)
            ?
            <Typography component="p">
              {props.destination.city}, {props.destination.state}, {props.destination.country}
            </Typography>
             :
             <Typography component="p">
               {props.destination.city}, {props.destination.country}
             </Typography> }
          <Typography component="p">
            {props.destination.date.slice(0, 10)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to itinerary
        </Button>
        {/* <Button size="small" color="primary">
          Edit
        </Button> */}
        <EditForm destination={props.destination} />
        <IconButton aria-label="Delete" className={classes.button}>
          <DeleteIcon size="medium" />
        </IconButton>
      </CardActions>
    </Card>
  )
}

// function mapStateToProps(state) {
//   return {
//     destinations: state.destinations
//   }
// }

export default withStyles(styles)(DestinationBox)
