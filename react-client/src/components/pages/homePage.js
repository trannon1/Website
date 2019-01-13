import React, { Component } from 'react';
import {ItemBox, PromotionBox, ShippingBox} from '../tablesComponent/tables.js';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h2>Home page</h2>
        <ItemBox />
        <PromotionBox />
        <ShippingBox />
      </div>
    )
  }
}

export default HomePage;