import React from 'react';
import {withGoogleMap, GoogleMap,Marker} from "react-google-maps";

export const MyGoogleMapComponent = withGoogleMap((props) => {
    return (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={{ lat: 50.475808, lng: 30.501852 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: 50.475808, lng: 30.501852 }} />}
        </GoogleMap>
    )
});