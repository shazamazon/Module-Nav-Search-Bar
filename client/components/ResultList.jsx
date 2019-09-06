import React from 'react';
import SearchResult from './SearchResult.jsx';

const ResultList = (props) => {
  return (
    <div id="nav-result-list-container">
      <ul id='nav-result-list'>
        {props.results.map((result) => {
          return (<SearchResult result={result} onSubmit={props.onSubmit}/>);
        })}
      </ul>
    </div>
  );
};

export default ResultList;