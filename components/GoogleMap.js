import React from 'react';

const GoogleMap = () => {
  return (
    <div id="map-container-google-2" className="z-depth-1-half map-container-2">
      <iframe
        src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        style={{ border: '0', width: '100%', height: '50vh' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
