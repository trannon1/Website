import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
          <li className="navButton"><Link to="/itemPage">Item List</Link></li>
          <li className="navButton"><Link to="/promotionPage">Promotion List</Link></li>
          <li className="navButton"><Link to="/shippingOptionPage">Shipping List</Link></li>
          <li className="navButton"><Link to="/submitOptionPage">Order</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;