import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class Example extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    }, () => this.props.handleStartDate(this.state.startDate));
  }

  render() {
    return <DatePicker
        dateFormat="MM/DD/YYYY"
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}
