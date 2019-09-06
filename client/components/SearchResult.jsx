import React from 'react';

const SearchResult = (props) => {

  const addEventListener = (e, id) => () => {
    const event = new CustomEvent('clickedProduct', {detail: id});
    window.dispatchEvent(event);
    props.onSubmit(e);
  };

  return (
    <li className='nav-search-result' onClick={addEventListener(event, props.result.ProductId)}>{props.result.ItemName}</li>
  );
};

export default SearchResult;