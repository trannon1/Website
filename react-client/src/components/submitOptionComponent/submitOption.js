import React, { Component } from 'react';
import "./submitOption.css"
import $ from "jquery";

class SubmitOptionPage extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {isToggleOn: true};
  
    //   // This binding is necessary to make `this` work in the callback
    //   this.handleClick = this.handleClick.bind(this);
    // }
  
    // handleClick() {
    //     document.getElementById("myDropdown").classList.toggle("show");
    // }
  
    render() {
      return (
        <div class="dropdown">
            <button onclick={this.handleClick} class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
      );
    }
  }

// class SubmitOptionPage extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
    
//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//       }
    
//       handleClick() {
//         this.setState(state => ({
//           isToggleOn: !state.isToggleOn
//         }));
//       }

//     render() {
//       return (
//         <div>
//           <div class="dropdown">
//               <button onclick={this.handleClick()}>
//               {this.state.isToggleOn ? 'ON' : 'OFF'}
//               </button>
//               {/* <div id="myDropdown" class="dropdown-content">
//                   <a href="#">Link 1</a>
//                   <a href="#">Link 2</a>
//                   <a href="#">Link 3</a>
//               </div> */}
//           </div>
//         </div>  
//       )
//     }
//   }
  
  export default SubmitOptionPage;