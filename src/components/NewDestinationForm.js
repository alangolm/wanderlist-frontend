import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDestination, addCoordinates } from '../action'
import DatePicker from './DatePicker'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import cityCoordinates from '../cityCoordinates'

class NewDestinationForm extends Component {

  state = {
    title: '',
    description: '',
    city: '',
    coordinates: [],
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
      city: event.target.value,
      coordinates: cityCoordinates[event.target.value]
    })
  }

  handleStateInput = event => {
    this.setState({
      state: event.target.value.toString()
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
    this.props.addCoordinates(this.state.coordinates)
    this.props.history.push('/destinations')
  }

  cityOptions = [
    { text: 'Barcelona', value: 'Barcelona' },
    { text: 'Madrid', value: 'Madrid' },

  ]

  render() {
    return (

      <center><div className="ui form" widths="equal">
        <h1 className="new-dest-header">Add To Your Destinations!</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="field"><select style={{width: '25%'}} onChange={this.handleCityInput} className="ui search dropdown"><option value="">Select City</option>
            {/* <option value="New York">New York</option> */}
            <option value="Paris">Paris</option>
            <option value="Miami">Miami</option>
            {/* <option value="Washington, D.C.">Washington, D.C.</option> */}
            <option value="Chicago">Chicago</option>
            <option value="Boston">Boston</option>
            {/* <option value="Los Angeles">Los Angeles</option> */}
            {/* <option value="San Francisco">San Francisco</option> */}
            {/* <option value="New Orleans">New Orleans</option> */}
            <option value="London">London</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Berlin">Berlin</option>
            <option value="Munich">Munich</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Bangkok">Bangkok</option>
            {/* <option value="Hong Kong">Hong Kong</option> */}
            <option value="Rome">Rome</option>
            {/* <option value="Tel Aviv">Tel Aviv</option> */}
            <option value="Cairo">Cairo</option>
            <option value="Dubia">Dubia</option>
            <option value="Tokyo">Tokyo</option>
            {/* <option value="South Korea">South Korea</option> */}
            <option value="Toronto">Toronto</option>
            <option value="Santorini">Santorini</option>
            <option value="Sydney">Sydney</option>
            <option value="Moscow">Moscow</option>
            <option value="Beijing">Beijing</option>
            <option value="Shanghai">Shanghai</option>
            <option value="Reykjavik">Reykjavik</option>
            <option value="Prague">Prague</option>
            <option value="Split">Split</option>
            <option value="Jerusalem">Jerusalem</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Taipei">Taipei</option>
            <option value="Vienna">Vienna</option>
            <option value="Osaka">Osaka</option>
            <option value="Milan">Milan</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Seoul">Seoul</option>
            <option value="Singapore">Singapore</option>
            <option value="Honolulu">Honolulu</option>
            <option value="Tahiti">Tahiti</option>
            <input type="text" placeholder="Select City" /></select></div>
          <input style={{width: '25%'}} type="text" placeholder="Title" onChange={this.handleTitleInput} /><br /><br />
          <textarea style={{width: '40%'}} type="text" placeholder="Description" onChange={this.handleDescriptionInput} /><br /><br />

          {/* <input style={{width: '25%'}} type="text" placeholder="State" onChange={this.handleStateInput} /><br /><br /> */}
          <div className="field"><select style={{width: '25%'}} onChange={this.handleCityInput} className="ui search dropdown"><option value="">Select State</option>
            <option value="Alabama">Alabama</option>
          	<option value="Alaska">Alaska</option>
          	<option value="Arizona">Arizona</option>
          	<option value="Arkansas">Arkansas</option>
          	<option value="California">California</option>
          	<option value="Colorado">Colorado</option>
          	<option value="Connecticut">Connecticut</option>
          	<option value="Delaware">Delaware</option>
          	<option value="District Of Columbia">District Of Columbia</option>
          	<option value="Florida">Florida</option>
          	<option value="Georgia">Georgia</option>
          	<option value="Hawaii">Hawaii</option>
          	<option value="Idaho">Idaho</option>
          	<option value="Illinois">Illinois</option>
          	<option value="Indiana">Indiana</option>
          	<option value="Iowa">Iowa</option>
          	<option value="Kansas">Kansas</option>
          	<option value="Kentucky">Kentucky</option>
          	<option value="Louisiana">Louisiana</option>
          	<option value="Maine">Maine</option>
          	<option value="Maryland">Maryland</option>
          	<option value="Massachusetts">Massachusetts</option>
          	<option value="Michigan">Michigan</option>
          	<option value="Minnesota">Minnesota</option>
          	<option value="Mississippi">Mississippi</option>
          	<option value="Missouri">Missouri</option>
          	<option value="Montana">Montana</option>
          	<option value="Nebraska">Nebraska</option>
          	<option value="Nevada">Nevada</option>
          	<option value="New Hampshire">New Hampshire</option>
          	<option value="New Jersey">New Jersey</option>
          	<option value="New Mexico">New Mexico</option>
          	<option value="New York">New York</option>
          	<option value="North Carolina">North Carolina</option>
          	<option value="North Dakota">North Dakota</option>
          	<option value="Ohio">Ohio</option>
          	<option value="Oklahoma">Oklahoma</option>
          	<option value="Oregon">Oregon</option>
          	<option value="Pennsylvania">Pennsylvania</option>
          	<option value="Rhode Island">Rhode Island</option>
          	<option value="South Carolina">South Carolina</option>
          	<option value="South Dakota">South Dakota</option>
          	<option value="Tennessee">Tennessee</option>
          	<option value="Texas">Texas</option>
          	<option value="Utah">Utah</option>
          	<option value="Vermont">Vermont</option>
          	<option value="Virginia">Virginia</option>
          	<option value="Washington">Washington</option>
          	<option value="West Virginia">West Virginia</option>
          	<option value="Wisconsin">Wisconsin</option>
          	<option value="Wyoming">Wyoming</option>
            <input type="text" placeholder="Select State" /></select>
          </div>
          <div className="field"><select style={{width: '25%'}} onChange={this.handleCountryInput} className="ui search dropdown"><option value="">Select Country</option>
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
          <DatePicker handleStartDate={this.handleStartDate} /><br />
          {/* <input type="submit" value="Submit"></input> */}
          <Button className="submit-new-dest-button" type="submit">
            Submit
          </Button>
        </form>
      </div></center>
      // </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDestination: (destinationForm) => dispatch(addDestination(destinationForm)),
    addCoordinates: (points) => dispatch(addCoordinates(points))
  }
}

export default connect(null, mapDispatchToProps)(NewDestinationForm)
