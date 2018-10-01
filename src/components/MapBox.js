// import React, { Component } from 'react';
// import ReactMapBoxGl, { Marker, Layer, Feature } from 'react-mapbox-gl'
//
// const accessToken = "pk.eyJ1IjoiYWxhbmdvbG0iLCJhIjoiY2ptYzhwcGo2MHQwNDNsbnliazE3anV4biJ9.mf9bzfRephQrIhj64MRZ0g"
// const style = "mapbox://styles/alangolm/cjmcjlgrnimuy2rnsklmo1ldy"
//
// const Map = ReactMapBoxGl({
//   accessToken
// })
//
// const mapStyle = {
//   height: '90vh',
//   width: '90vw'
// }
//
// class MapBox extends Component {
//
//   render() {
//
//     return (
//       <div>
//         <h1>Explore Your World!</h1>
//         <center><Map
//           style={style}
//           containerStyle={mapStyle}
//         /></center>
//       </div>
//     )
//   }
//
//
// }
//
// export default MapBox
//
// // {/*center={lng: 74.01, lat: 40.71}*/}


import React from "react";
import Icon from "../map-marker-icon.png";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const accessToken = "pk.eyJ1IjoiYWxhbmdvbG0iLCJhIjoiY2ptYzhwcGo2MHQwNDNsbnliazE3anV4biJ9.mf9bzfRephQrIhj64MRZ0g"

const Map = ReactMapboxGl({
  accessToken
});

class MapBox extends React.Component {

  state = {
    points: [
    //   [-87.6309729, 41.76716449],
    //   [-87.63097366, 41.76668286],
    //   [-87.63095643, 41.76619789],
    //   [-87.63095245, 41.76578],
    //   [-87.63094033, 41.76561825]
    ],
    zoom: [15],
    center: [-74.013859, 40.705197]
  };
  // handleClick = (map, ev) => {
  //   const { lng, lat } = ev.lngLat;
  //   var { points } = this.state;
  //   points = [...points, [lng, lat]];
  //   const zoom = [map.transform.tileZoom + map.transform.zoomFraction];
  //   this.setState({
  //     points,
  //     zoom,
  //     center: map.getCenter()
  //   });
  // };
  render() {
    const { points, zoom, center } = this.state;
    const image = new Image(20, 30);
    image.src = Icon;
    const images = ["marker", image];
    return (
      <div>
      <h1>Explore Your World!</h1>
      <Link
        // position="right"
        to="/new_destination"><button
        value="Add Destination">
        Add Destination
        </button>
      </Link><br /><br />
      <center><Map
        style="mapbox://styles/alangolm/cjmcjlgrnimuy2rnsklmo1ldy"
        zoom={zoom}
        center={center}
        containerStyle={{ height: '90vh', width: '95vw' }}
        // onClick={this.handleClick}
      >
        <Layer
          type="symbol"
          id="points"
          layout={{ "icon-image": "marker", "icon-allow-overlap": true }}
          images={images}
        >
          {points.map((point, i) => <Feature key={i} coordinates={point} />)}
        </Layer>
      </Map></center>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(null, mapDispatchToProps)(MapBox)
