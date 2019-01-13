import React, { Component } from 'react';
import "./tables.css"
import ItemTable from '../itemComponent/item.js';
import PromotionTable from '../promotionComponent/promotion.js';
import ShippingOptionTable from '../shippingOptionComponent/shippingOption.js';

  class ItemBox extends React.Component {
    constructor() {
      super();
      this.state = {
        showBox: false
      }
    }
    onClick(e){
      e.preventDefault();
      this.setState({showBox: !this.state.showBox})
    }
    render() {
      return (
        <div>
          <a onClick={this.onClick.bind(this)} href='#' id = "itemBox">My Items</a>
          {this.state.showBox && < ItemTable/>}
        </div>
      )
    }
  }
  
  
  class PromotionBox extends React.Component {
    constructor() {
      super();
      this.state = {
        showBox: false
      }
    }
    onClick(e){
      e.preventDefault();
      this.setState({showBox: !this.state.showBox})
    }
    render() {
      return (
        <div>
          <a onClick={this.onClick.bind(this)} href='#' id = "promotionBox">My Promotions</a>
          {this.state.showBox && < PromotionTable/>}
        </div>
      )
    }
  }

  class ShippingBox extends React.Component {
    constructor() {
      super();
      this.state = {
        showBox: false
      }
    }
    onClick(e){
      e.preventDefault();
      this.setState({showBox: !this.state.showBox})
    }
    render() {
      return (
        <div>
          <a onClick={this.onClick.bind(this)} href='#' id = "shippingBox">My Shipping Options</a>
          {this.state.showBox && <ShippingOptionTable/>}
        </div>
      )
    }
  }
  
  export {ItemBox, PromotionBox, ShippingBox};