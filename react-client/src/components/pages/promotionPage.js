import React, { Component } from 'react';
import PromotionTable from '../promotionComponent/promotion.js';

class PromotionPage extends Component {
  render() {
    return (
      <div>
        <h2>My Promotions</h2>
        <PromotionTable />
      </div>  
    )
  }
}

export default PromotionPage;