import React from 'react';

const ResultList = (props) => {
  return(
    <div id="nav-result-list-container">
      <ul id='nav-result-list'>
        <li className='nav-search-result'>Result 1</li>
        <li className='nav-search-result'>Result 2</li>
        <li className='nav-search-result'>Result 3</li>
        <li className='nav-search-result'>Result 4</li>
      </ul>
    </div>
  );
};

export default ResultList;