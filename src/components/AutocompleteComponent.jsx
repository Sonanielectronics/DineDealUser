
// AutocompleteComponent.js
import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const AutocompleteComponent = ({ sendDataToParent, sendDataToParent2 , sendDataToParent3 }) => {
  const [address, setAddress] = useState('');


  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSelect = async (selectedAddress) => {
    try {
      setAddress(selectedAddress);
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      sendDataToParent(selectedAddress);
      sendDataToParent2(latLng.lat);
      sendDataToParent3(latLng.lng);

    } catch (error) {
      console.error('Error selecting place:', error);
    }
  };


  return (
    <div className='relative bg-fuchsia-300 w-60 h-10 mr-4 rounded-lg text-white p-3 flex items-center'>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ position: 'relative', width: '100%' }}>
            <style>
        {`
          #location-search-input::placeholder {
            color: white; /* Your desired color */
            opacity: 1; /* Ensure it's not faded */
          }
        `}
      </style>
            <input
              {...getInputProps({
                id:"location-search-input",
                placeholder: 'Enter a location...',
                className: 'location-search-input outline-none',
                style: {
                  backgroundColor: 'transparent',
                },
              })}
            />
            <div 
              className="autocomplete-dropdown-container"
              style={{
                position: 'absolute',
                top: '100%',  // Positioned below the input field
                left: 0,
                right: 0,
                width: '100%',
                marginTop: '10px',  // Add gap between input and suggestions
                maxHeight: '180px',  // Set maximum height
                overflowY: 'auto',   // Enable scroll if needed
                backgroundColor: 'white', // Background color of the dropdown
                zIndex: 1000,  // Ensure it stays on top of other elements
                borderRadius: '4px', // Rounded corners
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', // Optional box shadow for a nicer look
              }}
            >
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? 'blue' : '#f0abfc',
                  padding: '10px',  // Padding inside each suggestion
                  cursor: 'pointer',  // Change cursor on hover
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })} key={index}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default AutocompleteComponent;