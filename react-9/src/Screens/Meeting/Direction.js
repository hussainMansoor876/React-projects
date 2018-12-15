/* eslint-disable no-undef */
/* global google */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer, withScriptjs } from "react-google-maps"

const { compose, withProps, lifecycle } = require("recompose");



class Direction2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: {}
    }
    console.log('props',props)
  }
  render() {
    const {meeting} = this.props
    console.log(meeting['lat'])
    const MapWithADirectionsRenderer = compose(
        withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDX8ACZCGD_pBceDScUH7qEJ80Yq-ehCn0&v=3.exp&libraries=geometry,drawing,places",
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `400px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),withScriptjs,
        withGoogleMap,
        lifecycle({
            componentDidMount() {
              const DirectionsService = new google.maps.DirectionsService();
        
              DirectionsService.route({
                origin: new google.maps.LatLng(this.props.userLat, this.props.userLng),
                destination: new google.maps.LatLng(meeting['lat'], meeting['lng']),
                travelMode: google.maps.TravelMode.DRIVING,
              }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                  this.setState({
                    directions: result,
                  });
                } else {
                  console.error(`error fetching directions ${result}`);
                }
              });
            }
          }))(props =>
            <GoogleMap
              defaultZoom={7}
              defaultCenter={new google.maps.LatLng(this.props.userLat, this.props.userLng)}
            >
              {props.directions && <DirectionsRenderer directions={props.directions} />}
            </GoogleMap>
          );
          
    return(
      <div>
          <MapWithADirectionsRenderer/>
      </div>
   )
 }

}
export default Direction2
