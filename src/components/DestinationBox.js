import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 500,

  },
  title: {
    fontSize: 35,
  }
};

const DestinationBox = props => {
  // console.log(props);
  console.log(props)
  const { classes } = props
  return (
    <Card className={classes.card} className={classes.border}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom className={classes.title} variant="headline" component="h2">
            {props.destination.title}
          </Typography>
          <Typography component="p">
            {props.destination.description}
          </Typography><br />
          <Typography component="p">
            {props.destination.city}, {props.destination.country}
          </Typography>
          <Typography component="p">
            {props.destination.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to itinerary
        </Button>
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
