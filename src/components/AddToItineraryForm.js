import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addSubEvent } from '../action'
import { connect } from 'react-redux'

class AddToItineraryForm extends Component {

  state = {
    open: false,
    description: '',
    date: ''
  };

  // handles opening of the modal
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  // handles closing of modal when clicking anywhere not inside of the modal box
  handleClose = () => {
    this.setState({ open: false });
  };

  // handles allowing users to type in input fields and update them
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handles submission of entire form and invokes addSubEvent function
  // passing in entire state obj & ID of entire dest instance 
  handleSubmit = event => {
    event.preventDefault()
    this.props.addSubEvent(this.state, this.props.destination.id)
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Button className="add-to-itinerary" color="primary" onClick={this.handleClickOpen}>Add To Itinerary</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Add an event to your trip itinerary!</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              name="description"
              autoFocus
              margin="dense"
              id="name"
              label="Description/Event"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              name="date"
              autoFocus
              margin="dense"
              id="name"
              label="Date (mm/dd/yyyy)"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// mapping dispatch to props to give access to the addSubEvent function from the reducer
// passing in state obj and dest ID to the function
function mapDispatchToProps(dispatch) {
  return {
    addSubEvent: (subEvent, id) => dispatch(addSubEvent(subEvent, id))
  }
}

export default connect(null, mapDispatchToProps)(AddToItineraryForm)
