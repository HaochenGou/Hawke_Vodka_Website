import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';

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
      position: { lat: 53.530747, lng: -113.2941718 }
    },
    {
        id: 5,
        name: "Sherwood Park Liquor",
        position: { lat: 53.5046048, lng: -113.2690759 }
    },
    {
        id: 6,
        name: "Sobeys Liquor",
        position: { lat: 53.5046048, lng: -113.2690759 }
    },
    {
        id: 7,
        name: "Liquor Depot",
        position: { lat: 53.5046048, lng: -113.2690759 }
    },
    {
        id: 8,
        name: "Wine and Beyond",
        position: { lat: 53.5046048, lng: -113.2690759 }
    },
    {
        id: 9,
        name: "Liquor Exchange",
        position: { lat: 53.5046048, lng: -113.2690759 }
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

    
  ];

  function FriendMap() {
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
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
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
      </GoogleMap>
    );
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBciIwP37arb8OwWxQ7Fc7bSOag_91jwvY'
  })(FriendMap);


