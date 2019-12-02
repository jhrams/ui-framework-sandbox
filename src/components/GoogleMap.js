import React, { useState, useEffect } from 'react';

const GoogleMap = () => {
  const [googlemap, setGoogleMap] = useState(null);
  const [previousMarkers, setPreviousMarkers] = useState([]);

  const getGoogleMapDiv = () => {
    return document.getElementById('map');
  }

  const createGoogleMap = () => {
    const newMap = new window.google.maps.Map(getGoogleMapDiv(), {
      zoom: 16,
      center: {
        lat: 43.642567,
        lng: -79.387054
      },
      disableDefaultUI: true,
    })

    const newMarker = new window.google.maps.Marker({
      position: {
        lat: 43.642567,
        lng: -79.387054
      },
      map: newMap,
    });

    setPreviousMarkers(newMarker)

    setGoogleMap(newMap)
  }

  const getGoogleMapSearch = () => {
    return document.getElementById('search-text-field');
  }

  const createGoogleMapSearch = () => {
    new window.google.maps.places.Autocomplete(getGoogleMapSearch(), {
      types: ['address']
    })
  }

  useEffect(() => {
    const googleMapScript = document.createElement('script');

    googleMapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCsA81aWSZZoBktjvoIR_lFVh1vMiV71sQ&libraries=places"

    window.document.body.appendChild(googleMapScript)

    googleMapScript.addEventListener('load', createGoogleMap);
    googleMapScript.addEventListener('load', createGoogleMapSearch);
  }, [])

  const submitOnClickHandler = (event) => {
    event.preventDefault();

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({'address': event.target.searchTextField.value}, function(results, status) {
      if (status == 'OK') {
        googlemap.setCenter(results[0].geometry.location);

        removeMarker();

        var marker = new window.google.maps.Marker({
            map: googlemap,
            position: results[0].geometry.location
        });

        setPreviousMarkers(marker)
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    })
  }

  const removeMarker = () => {
    previousMarkers.setMap(null)
  }

  return (
    <div>
      <form onSubmit={submitOnClickHandler}>
        <input id="searchTextField" type="text" placeholder="Let's type hereeee" />
        <button type="submit">submit search</button>
      </form>
      <div id="map" style={{ width: '400px', height: '300px' }}>testing</div>
    </div>
  );
}

export default GoogleMap;