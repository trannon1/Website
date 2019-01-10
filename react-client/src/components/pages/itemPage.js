import React, { Component } from 'react';
import ItemTable from '../itemComponent/item.js';

class ItemPage extends Component {
  render() {
    return (
      <div>
        <h2>My Items</h2>
        <ItemTable />
      </div>  
    )
  }
}

export default ItemPage;