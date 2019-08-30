import React from 'react';
import Category from './Category.jsx';

const CategoryList = (props) => {
  return (
    <div id="nav-category-list">
      <Category name="Wands"/>
      <Category name="Quidditch"/>
      <Category name="Spells"/>
      <Category name="Accessories"/>
      <Category name="Rarities"/>
      <Category name="Food"/>
      <Category name="Furniture"/>
      <Category name="Lamps"/>
      <Category name="Lord of The Rings"/>
    </div>
  );
};

export default CategoryList;