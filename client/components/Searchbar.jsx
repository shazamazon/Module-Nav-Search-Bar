import React from 'react';

const Searchbar = (props) => {
  return (
    <div id="nav-search-bar">
      <form id="nav-search-bar-form">
        <select name="nav-category-selector" form="nav-search-bar-form">
          <option value="wands">Wands</option>
          <option value="quidditch">Quidditch</option>
          <option value="spells">Spells</option>
          <option value="accessories">Accessories</option>
          <option value="rarities">Rarities</option>
          <option value="food">Food</option>
          <option value="furniture">Furniture</option>
          <option value="lamps">Lamps</option>
          <option value="lotr">LoTR</option>
        </select>
        <input type="text"></input>
        <input type="submit" value="magnifier"></input>
      </form>
    </div>
  );
};

export default Searchbar;