import React from 'react';

const ResultList = (props) => {
  return (
    <div id="nav-result-list-container">
      <ul id='nav-result-list'>
        {props.results.map((result) => {
          return <li className='nav-search-result'>{result.ItemName}</li>;
        })}
      </ul>
    </div>
  );
};

export default ResultList;