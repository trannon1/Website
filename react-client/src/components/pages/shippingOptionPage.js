import React, { Component } from 'react';
import ShippingOptionTable from '../shippingOptionComponent/shippingOption.js';

class ShippingOptionPage extends Component {
  render() {
    return (
      <div>
        <h2>My Shipping Options</h2>
        <ShippingOptionTable />
      </div>  
    )
  }
}

export default ShippingOptionPage;