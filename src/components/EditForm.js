import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from './DatePicker'

class EditForm extends Component {

    state = {
      open: false,
      title: '',
      description: '',
      city: '',
      state: '',
      country: '',
      date: ''
    }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // handleTitleInput = event => {
  //   this.setState({
  //     title: event.target.value
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault()
    this.props.editDestination()
  }

  render() {
    // console.log(this.props);
    return (

      (this.props.destination.state) ?

      <div>
        <Button color="primary" onClick={this.handleClickOpen}>Edit</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {/* <DialogTitle id="form-dialog-title">Edit Destination</DialogTitle> */}
            <DialogContentText>
                  To edit this destination, please make all necessary changes and then
                  hit save!
              </DialogContentText>
          <DialogContent>
          <TextField
            onChange={this.handleTitleInput}
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            value={this.props.destination.title}
            type="text"
            fullWidth
          />
          </DialogContent>
          <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            value={this.props.destination.description}
            type="text"
            fullWidth
          />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="City"
              value={this.props.destination.city}
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="State"
              value={this.props.destination.state}
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Country"
              value={this.props.destination.country}
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Date"
              value={this.props.destination.date.slice(0, 10)}
              type="text"
              fullWidth
            />
          </DialogContent>
          {/* <DatePicker /> */}
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      :

      <div>
        <Button color="primary" onClick={this.handleClickOpen}>Edit</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {/* <DialogTitle id="form-dialog-title">Edit Destination</DialogTitle> */}
            <DialogContentText>
                  To edit this destination, please make all necessary changes and then
                  hit save!
              </DialogContentText>
          <DialogContent>
          <TextField
            onChange={this.handleTitleInput}
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            value={this.props.destination.title}
            type="text"
            fullWidth
          />
          </DialogContent>
          <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            value={this.props.destination.description}
            type="text"
            fullWidth
          />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="City"
              value={this.props.destination.city}
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Country"
              value={this.props.destination.country}
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Date"
              value={this.props.destination.date.slice(0, 10)}
              type="text"
              fullWidth
            />
          </DialogContent>
          {/* <DatePicker /> */}
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     editDestination:
//   }
// }

export default EditForm
