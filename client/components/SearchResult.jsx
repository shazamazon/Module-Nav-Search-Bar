import React from 'react';

const SearchResult = (props) => {

  const addEventDispatcher = (e, id) => () => {
    const event = new CustomEvent('clickedProduct', {detail: id});
    window.dispatchEvent(event);
    props.onSubmit(e);
  };

  return (
    <li className='nav-search-result' onClick={addEventDispatcher(event, props.result.ProductId)}>{props.result.ItemName}</li>
  );
};

export default SearchResult;