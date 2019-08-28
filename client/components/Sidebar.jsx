import React from 'react';

const Sidebar = (props) => {
  return (
    <div id="nav-sidebar" key = "nav-sidebar">
      <button id="nav-sidebar-btn" key="nav-sidebar-btn">
        <img id="nav-hamburger-icon" key="nav-hamburger-icon" src="https://nav-search-bar.s3.us-east-2.amazonaws.com/nav-icons/3_bars_final.png"></img>
      </button>
    </div>
  );
};

export default Sidebar;