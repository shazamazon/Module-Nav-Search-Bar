import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
import Logo from './Logo.jsx';
import Searchbar from './Searchbar.jsx';
import Location from './Location.jsx';
import CategoryList from './CategoryList.jsx';
import Cart from './Cart.jsx';

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      categories: [],
      currentCategory: 'all'
    };
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    axios.get('/api/search/items')
      .then(res=> {
        const products = res.data;
        this.setState({ products });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    return (
      <>
      <div id="nav-container-top">
        <Sidebar />
        <Logo />
        <Searchbar />
      </div>
      <div id="nav-container-bottom">
        <Location />
        <CategoryList />
        <Cart />
      </div>
      </>
    );
  }
}

export default Navbar;