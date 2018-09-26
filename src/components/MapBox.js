import React, { Component } from 'react';
import ReactMapBoxGl from 'react-mapbox-gl'

const Map = ReactMapBoxGl({
  accessToken: 'pk.eyJ1IjoiYWxhbmdvbG0iLCJhIjoiY2ptYzhwcGo2MHQwNDNsbnliazE3anV4biJ9.mf9bzfRephQrIhj64MRZ0g'
})

class MapBox extends Component {

  render() {
    return (
      <div>
        <h1>Explore Your World!</h1>
        <center><Map
          style="mapbox://styles/alangolm/cjmcjlgrnimuy2rnsklmo1ldy"
          containerStyle={{
            height: "90vh",
            width: "90vw"
          }}/></center>
      </div>
    )
  }










}

export default MapBox
