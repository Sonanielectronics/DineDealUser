import React, { useState } from 'react';

const LocationComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <h1>Get User Location</h1>
      <button onClick={getLocation}>Get Location</button>
      {location.latitude && location.longitude ? (
        <div>
          <h2>Location</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>No location available</p>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default LocationComponent;
