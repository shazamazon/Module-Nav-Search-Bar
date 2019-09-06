import React from 'react';

const SearchResult = (props) => {
  const addEventListener = (id) => () => {
    const event = new CustomEvent('clickedProduct', {detail: id});
    window.dispatchEvent(event);
  };

  return (
    <li className='nav-search-result' onClick={addEventListener(props.result.ProductId)}>{props.result.ItemName}</li>
  );
};

export default SearchResult;