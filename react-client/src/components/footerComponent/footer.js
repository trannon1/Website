import React, { Component } from 'react';

var style = {
  backgroundColor: "#F8F343",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

const Footer = React.createClass({
  render: function() {
      return (
          <div style={style}>
              Footer
          </div>
      );
  }
});

export default Footer;