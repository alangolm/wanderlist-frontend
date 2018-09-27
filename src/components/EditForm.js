import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DatePicker from './DatePicker'
import { withStyles } from '@material-ui/core/styles'
import { editDestination } from '../action'
import { connect } from 'react-redux'

const styles = {
  dialog: {
    color: '#ff0000',
    // minWidth: '500px',
    maxWidth: 'lg',
    // width: '500px'
  },
  paperFullWidth: {
    color: "#ff0000",
    // border: "1px solid red"
  },
  textField: {
    color: '#ff0000'
  }
}


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

  componentDidMount() {
    this.setState({
      title: this.props.destination.title,
      description: this.props.destination.description,
      city: this.props.destination.city,
      state: this.props.destination.state,
      country: this.props.destination.country,
      date: this.props.destination.date
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.editDestination(this.state, this.props.destination.id)
    this.setState({ open: false })
  }

  render() {
    // console.log(this.props.destination);

    const { classes } = this.props

    return (

      (this.props.destination.state) ?

      <div>
        <Button color="primary" onClick={this.handleClickOpen}>Edit</Button>
        <form>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          className={classes.paperFullWidth}
          fullWidth>
          <DialogTitle id="form-dialog-title">Edit Destination</DialogTitle>
          <DialogContent>
          <TextField
            onChange={this.handleChange}
            autoFocus
            fullWidth
            margin="dense"
            id="name"
            label="Title"
            name="title"
            value={this.state.title}
            type="text"
            className={classes.textField}
          />
          </DialogContent>
          <DialogContent>
          <TextField
            onChange={this.handleChange}
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            value={this.state.description}
            name="description"
            type="text"
            fullWidth
          />
          </DialogContent>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="name"
              label="City"
              value={this.state.city}
              name="city"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="name"
              label="State"
              value={this.state.state}
              name="state"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="name"
              label="Country"
              value={this.state.country}
              name="country"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="name"
              label="Date"
              value={this.state.date.slice(0, 10)}
              name="date"
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
        </form>
      </div>

      :

      <div>
        <Button color="primary" onClick={this.handleClickOpen}>Edit</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth>
          <center><DialogTitle id="form-dialog-title">Edit Destination</DialogTitle></center>
          <DialogContent>
          <TextField
            onChange={this.handleChange}
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            name="title"
            value={this.state.title}
            type="text"
            fullWidth
          />
          </DialogContent>
          <DialogContent>
          <TextField
            autoFocus
            onChange={this.handleChange}
            margin="dense"
            id="name"
            label="Description"
            value={this.state.description}
            name="description"
            type="text"
            fullWidth
          />
          </DialogContent>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="name"
              label="City"
              value={this.state.city}
              name="city"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="name"
              label="Country"
              value={this.state.country}
              name="country"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="name"
              label="Date"
              value={this.state.date.slice(0, 10)}
              name="date"
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

function mapDispatchToProps(dispatch) {
  return {
    editDestination: (editForm, id) => dispatch(editDestination(editForm, id))
  }
}

const editFormWithStyle = withStyles(styles)(EditForm)

export default connect(null, mapDispatchToProps)(editFormWithStyle)
