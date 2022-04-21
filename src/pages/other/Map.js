import { Map, GoogleApiWrapper, Marker, InfoWindow, google} from 'google-maps-react';
import React, {useState}from 'react';
import { PropTypes } from "prop-types";

const markers = [
    {
      id: 1,
      name: "Crossroads Liquor",
      position: { lat: 53.5400311, lng: -113.321852 }
    },
    {
      id: 2,
      name: "Little Guy Liquor",
      position: { lat: 53.54205, lng: -113.3131832 }
    },
    {
      id: 3,
      name: "Everything Wine And More",
      position: { lat: 53.5434527, lng: -113.317842 }
    },
    {
      id: 4,
      name: "Safeway Liquor",
      position: { lat: 53.531001, lng: -113.2955138 }
    },
    {
        id: 5,
        name: "Sherwood Park Liquor",
        position: { lat: 53.512759, lng: -113.322763 }
    },
    {
        id: 6,
        name: "Sobeys Liquor",
        position: { lat: 53.54191354, lng: -113.2659252}
    },
    {
        id: 7,
        name: "Liquor Depot",
        position: { lat: 53.5389321, lng: -113.4262557 }
    },
    {
        id: 8,
        name: "Wine and Beyond",
        position: { lat: 53.5691549, lng: -113.2848948 }
    },
    {
        id: 9,
        name: "Liquor Exchange",
        position: { lat: 53.5549187, lng: -113.364679 }
    },
    {
        id: 10,
        name: "Sherbrooke",
        position: { lat: 53.5709743, lng: -113.5509343 }
    },
    {
        id: 11,
        name: "Sandy Lane Liquor",
        position: { lat: 53.5319308, lng: -113.5934547 }
    },
    {
        id: 12,
        name: "Econo Liquor",
        position: { lat: 53.6281441, lng: -113.4763974 }
    },
    {
        id: 13,
        name: "Boss Liquor",
        position: { lat: 53.4087788, lng: -113.5177239 }
    },
    {
      id: 14,
      name: "Spiritson 101",
      position: { lat: 53.70074, lng: -113.20333 }
    },
    {
      id: 15,
      name: "cono Liquor",
      position: { lat: 53.6814298, lng: -113.2440551 }
    },
    {
      id: 16,
      name: "Liquor House",
      position: { lat: 53.681458, lng: -113.248677 }
    },
    {
      id: 17,
      name: "Pineview Liquor",
      position: { lat: 53.7004122, lng: -113.2320329 }
    },
    {
      id: 18,
      name: "Angie’s Cold Beer & Liquor Store",
      position: { lat: 53.698574, lng: -113.2314527 }
    },
    {
      id: 19,
      name: "SSS Liquor",
      position: { lat: 53.5349542, lng: -113.3236367 }
    },
    {
      id: 20,
      name: "Maplewood Liquor Store",
      position: { lat: 53.5151546, lng: -113.2965409 }
    },
    {
      id: 21,
      name: "GREAT Liquor",
      position: { lat: 53.5053799, lng: -113.3278285 }
    },
    {
      id: 22,
      name: "Liquor Vault",
      position: { lat: 53.529036, lng: -113.2922286 }
    },   
  ];

  const FriendMap = props => {
    
    const [activeMarker, setActiveMarker] = useState(null);
  
    const handleActiveMarker = (marker) => {
      if (marker === activeMarker) {
        return;
      }
      setActiveMarker(marker);
    };
  
    const handleOnLoad = (map) => {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach(({ position }) => bounds.extend(position));
      map.fitBounds(bounds);
    };
  
    return (
      <Map
        google={props.google}
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
        zoom={10}
        initialCenter={{ lat: 53.536850, lng: -113.331281 }}
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
      >
        {markers.map(({ id, name, position }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </Map>
    );
  }

  FriendMap.propTypes = {
    google: PropTypes.object,
  };

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBciIwP37arb8OwWxQ7Fc7bSOag_91jwvY'
  })(FriendMap);


