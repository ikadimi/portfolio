import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import './Map.css'

function Map({ location, zoomLevel }) {
    return (
        <div className="map">
            <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCRdJCsrFzOK1ZawyuaWQ7KwSwbmUGCKwU' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
                />
            </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map
