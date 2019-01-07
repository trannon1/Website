import React, { Component } from 'react';
import ItemTable from '../itemComponent/item.js';

// var item = {
//   0:{
//   "name": "Jon Snow Life 1",
//   "description": "This is Jon's life no. 1 ",
//   "price": 99,
//   "itemId": "Sku-00",
//   "inStock": true
//   }
// }


class HomePage extends Component {
  render() {
    return (
      <div>
        Home page
        <h2>My Items</h2>
        <ItemTable />
      </div>  
    )
  }
}

export default HomePage;