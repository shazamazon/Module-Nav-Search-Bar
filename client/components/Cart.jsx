import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberInCart: 0
    };
  }

  componentDidMount() {
    window.addEventListener('addToCart', (event) => { this.onAddToCart(event); });
  }

  onAddToCart(event) {
    console.log(event);
    const newNum = this.state.numberInCart + 1;
    this.setState({numberInCart: newNum});
  }

  render() {
    return (
      <div id="nav-cart-container">
        <div id="nav-language-select" class="nav-cart-buttons">
          <p id="nav-language-en">EN</p>
          <img id="nav-language-icon" src="https://nav-search-bar.s3.us-east-2.amazonaws.com/nav-icons/global_final.png"></img>
        </div>
        <div id="nav-account-lists" class="nav-cart-buttons">
          <p id="nav-account-hello">Hello, Zubair</p>
          <p id="nav-account-dropdown" class="nav-cart-larger-text">Account & Lists</p>
        </div>
        <div id="nav-cart-orders" class="nav-cart-larger-text nav-cart-buttons">Orders</div>
        <div id="nav-cart-prime" class="nav-cart-larger-text nav-cart-buttons">Try Prime</div>
        <div id="nav-cart" class="nav-cart-buttons">
          <img id="nav-cart-icon" src="https://nav-search-bar.s3.us-east-2.amazonaws.com/nav-icons/cart_final.png"></img>
          {this.state.numberInCart <= 9 ?
            <div>
              <span id="nav-cart-icon-overlay">{this.state.numberInCart}</span>
              <p id="nav-cart-text" class="nav-cart-larger-text">Cart</p>
            </div> :
            <div>
              <span id="nav-cart-icon-overlay-double-digit">{this.state.numberInCart}</span>
              <p id="nav-cart-text-double-digit" class="nav-cart-larger-text">Cart</p>
            </div>}
        </div>
      </div>
    );
  }
}

export default Cart;