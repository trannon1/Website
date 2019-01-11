import React, { Component } from 'react';
import SubmitOptionTable from '../submitOptionComponent/submitOption.js';

class SubmitOptionPage extends Component {
  render() {
    return (
      <div>
        <h2>My Orders</h2>
        <SubmitOptionTable />
      </div>  
    )
  }
}

export default SubmitOptionPage;