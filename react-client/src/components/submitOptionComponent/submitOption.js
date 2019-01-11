import React, { Component } from 'react';
import $ from "jquery";

class SubmitOptionPage extends Component {
    
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    render() {
      return (
        <div>
          <div class="dropdown">
              <button onclick={this.myFunction()} class="dropbtn">Dropdown</button>
              <div id="myDropdown" class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
              </div>
          </div>
        </div>  
      )
    }
  }
  
  export default SubmitOptionPage;