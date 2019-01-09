import React, { Component } from 'react';
import $ from "jquery";

class ItemTable extends Component {
    render() {

    var url = "http://jst.edchavez.com/api/inventory/getInventory/";

    function jList(obj){
        var listData = [];
        for (var i = 0; i < obj["items"].length; i++){
            listData.push([
            obj["items"][i]["name"],
            obj["items"][i]["description"],
            obj["items"][i]["price"],
            obj["items"][i]["itemId"],
            obj["items"][i]["inStock"]]);
            }

            // Make a container element for the list
        var listContainer = document.createElement("div");

        // Add it to the page
        document.getElementsByTagName("body")[0].appendChild(listContainer);

        // Make the list
        var listElement = document.createElement("ul");

        // Add it to the page
        listContainer.appendChild(listElement);

        // Set up a loop that goes through the items in listItems one at a time
        var numberOfListItems = listData.length;

        for (var i = 0; i < numberOfListItems; ++i) {
            // create an item for each one
            var listItem = document.createElement("li");

            // Add the item text
            listItem.innerHTML = listData[i];

            // Add listItem to the listElement
            listElement.appendChild(listItem);
        }
    }

    function makeList() {

    $.get(url, function (d) {
        jList(d);
    });

    // // Make a container element for the list
    // var listContainer = document.createElement("div");

    // // Add it to the page
    // document.getElementsByTagName("body")[0].appendChild(listContainer);

    // // Make the list
    // var listElement = document.createElement("ul");

    // // Add it to the page
    // listContainer.appendChild(listElement);

    // // Set up a loop that goes through the items in listItems one at a time
    // var numberOfListItems = listData.length;

    // for (var i = 0; i < numberOfListItems; ++i) {
    //     // create an item for each one
    //     var listItem = document.createElement("li");

    //     // Add the item text
    //     listItem.innerHTML = listData[i];

    //     // Add listItem to the listElement
    //     listElement.appendChild(listItem);
    // }
}

    // Usage
    makeList();

      return (
        <list />
      )
    }
  }
  
  export default ItemTable;