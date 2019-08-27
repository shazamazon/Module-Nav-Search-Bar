import React from 'react';

const Sidebar = (props) => {
  return (
    <div id="nav-sidebar" key = "nav-sidebar">
      <button id="nav-sidebar-btn" key = "nav-sidebar-btn">
        <a id="nav-hamburger-icon" key = "nav-hamburger-icon">&#9776;</a>
      </button>
    </div>
  );
};

export default Sidebar;