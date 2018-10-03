import React from "react";
import Icon from "../map-marker-icon.png";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const accessToken = "pk.eyJ1IjoiYWxhbmdvbG0iLCJhIjoiY2ptYzhwcGo2MHQwNDNsbnliazE3anV4biJ9.mf9bzfRephQrIhj64MRZ0g"

const Map = ReactMapboxGl({
  accessToken
});

class MapBox extends React.Component {
  state = {
    // points: [[-87.63097366, 41.76668286]],
      // [-87.63097366, 41.76668286],],
    //   [-87.63095643, 41.76619789],
    //   [-87.63095245, 41.76578],
    //   [-87.63094033, 41.76561825]
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
    // console.log(this.props);

    // console.log('points are',this.state.points);
    console.log("coords are", this.props);

    const { zoom, center } = this.state;
    const image = new Image(20, 30);
    image.src = Icon;
    const images = ["marker", image];
    return (
      <div>
      <center><h1 className="explore-page-header">Explore Your World!</h1></center>
      <Link to="/new_destination"><Button className="add-dest-button-map">Add Destination</Button></Link><br /><br /><br />
      <center><Map
        // style="mapbox://styles/alangolm/cjmcjlgrnimuy2rnsklmo1ldy"
        style="mapbox://styles/alangolm/cjmcgzhs344f72rnywkmca93u"
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
          {/* {this.state.points.map((point, i) => <Feature key={i} coordinates={point} />)} */}
          {this.props.coordinates.map((point, i) => <Feature key={i} coordinates={point} />)}
        </Layer>
      </Map></center>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("coordinates are", state.coordinates);
  // debugger
  return {
    coordinates: state.coordinates
  }
}

export default connect(mapStateToProps)(MapBox)
