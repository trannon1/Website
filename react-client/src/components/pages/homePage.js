import React, { Component } from 'react';
import ItemTable from '../itemComponent/item.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <head>
        </head>
        Home page
        <h2>My Items</h2>
        <ItemTable />
      </div>  
    )
  }
}

export default HomePage;