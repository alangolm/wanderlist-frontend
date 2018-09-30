import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDestination } from '../action'
import DatePicker from './DatePicker'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class NewDestinationForm extends Component {

  state = {
    title: '',
    description: '',
    city: '',
    state: '',
    country: '',
    date: ''
  }

  handleTitleInput = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionInput = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleCityInput = event => {
    this.setState({
      city: event.target.value
    })
  }

  handleStateInput = event => {
    this.setState({
      state: event.target.value
    })
  }

  handleCountryInput = event => {
    this.setState({
      country: event.target.value.toString()
    })
  }

  handleStartDate = startDate => {
    this.setState({
      date: startDate._d
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addDestination(this.state)
    // setTimeout(function() {
      this.props.history.push('/destinations')
    // }, 2000)
  }

  render() {
    // console.log(this.state);
    return (
  // <Form onSubmit={this.handleSubmit}>
  //   <Form.Group widths='equal'>
  //     <Form.Field
  //       onChange={this.handleTitleInput}
  //       id='form-input-control-first-name'
  //       control={Input}
  //       label='Title'
  //       placeholder='Title'
  //     />
  //     <Form.Field
  //       id='form-input-control-last-name'
  //       control={Input}
  //       label='Last name'
  //       placeholder='Last name'
  //     />
  //   </Form.Group>
  //   <Form.Field
  //     onChange={this.handleDescriptionInput}
  //     id='form-textarea-control-opinion'
  //     control={TextArea}
  //     label='Description'
  //     placeholder='Description'
  //   />
  //   <Form.Field
  //     id='form-button-control-public'
  //     control={Button}
  //     content='Submit'
  //   />
  // </Form>






      <div className="ui form">
        <h1>Add To Your Destinations!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" onChange={this.handleTitleInput} /><br />
          <textarea type="text" placeholder="Description" onChange={this.handleDescriptionInput} /><br />
          <div className="field"><select onChange={this.handleCityInput} className="ui search dropdown"><option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Paris">Paris</option>
            <option value="Miami">Miami</option>
            <option value="Washington, D.C.">Washington, D.C.</option>
            <option value="Chicago">Chicago</option>
            <option value="Boston">Boston</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="San Francisco">San Francisco</option>
            <option value="New Orleans">New Orleans</option>
            <option value="London">London</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Berlin">Berlin</option>
            <option value="Munich">Munich</option>
            <option value="Bangkok">Bangkok</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Rome">Rome</option>
            <option value="Tel Aviv">Tel Aviv</option>
            <option value="Cairo">Cairo</option>
            <option value="Dubia">Dubia</option>
            <option value="Tokyo">Tokyo</option>
            <option value="South Korea">South Korea</option>
            <input type="text" placeholder="Select City" /></select></div>
          <input type="text" placeholder="State" onChange={this.handleStateInput} /><br />
          <div className="field"><select onChange={this.handleCountryInput} className="ui search dropdown"><option value="">Select Country</option>
            <option value="Argentina">Argentina</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Belgium">Belgium</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Canada">Canada</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Colombia">Colombia</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="South Korea">South Korea</option>
            <option value="Mexico">Mexico</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Norway">Norway</option>
            <option value="Panama">Panama</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Russia">Russia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Singapore">Singapore</option>
            <option value="South Africa">South Africa</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Thailand">Thailand</option>
            <option value="Turkey">Turkey</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States of America">United States of America</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Vietnam">Vietnam</option>
            <input type="text" placeholder="Select Country" /></select>
        </div>
          <DatePicker handleStartDate={this.handleStartDate} />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDestination: (destinationForm) => dispatch(addDestination(destinationForm))
  }
}

export default connect(null, mapDispatchToProps)(NewDestinationForm)
