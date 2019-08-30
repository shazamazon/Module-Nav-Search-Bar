import React from 'react';

const Location = (props) => {
  return (
    <div id="nav-location">
      <button id="nav-location-btn">
        <img id="nav-location-icon" src="https://nav-search-bar.s3.us-east-2.amazonaws.com/nav-icons/location_final.png"></img>
        <div id="nav-location-text">
          <p id="nav-location-text-top">Deliver to Sean</p>
          <p id="nav-location-text-bottom">Austin 78744</p>
        </div>
      </button>
    </div>
  );
};

export default Location;