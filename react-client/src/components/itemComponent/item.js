import React, { Component } from 'react';
import $ from "jquery";
import "./item.css";

class ItemTable extends Component {
    render() {

    var url = "http://jst.edchavez.com/api/inventory/getInventory/";

    function jList(obj){
        var listData = [];
        for (var i = 0; i < obj["items"].length; i++){
            var item = {
                name : obj["items"][i]["name"],
                description : obj["items"][i]["description"],
                price : obj["items"][i]["price"],
                itemId : obj["items"][i]["itemId"],
                inStock : obj["items"][i]["inStock"]
            };
            listData.push(item);
            }

            // Make a container element for the list
        var listContainer = document.createElement("div");

        // Add it to the page
        document.getElementsByTagName("body")[0].appendChild(listContainer);

        // Make the list
        var listElement = document.createElement("ul");

        /* create the link element */
        var linkElement = document.createElement('link');

        /* add attributes */
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', './src/components/itemComponent/item.css');

        /* attach to the document head */
        document.getElementsByTagName('head')[0].appendChild(linkElement)

        // Add it to the page
        listContainer.appendChild(listElement);

        // Set up a loop that goes through the items in listItems one at a time
        var numberOfListItems = listData.length;

        for (var i = 0; i < numberOfListItems; ++i) {
            // create an item for each one
            var listItem = document.createElement("li");
            var listAttr = document.createAttribute("class");
            listAttr.value = "items";
            listItem.setAttributeNode(listAttr);
            var html = '<span class="name">' + listData[i].name + '</span>' + '<span class="description">' + 
            listData[i].description + '</span>' + '<span class="price">' + listData[i].price + '</span>' +
            '<span class="itemId">' + listData[i].itemId + '</span>' + '<span class="inStock">' + 
            listData[i].inStock + '</span>';

            // Add the item text
            // listItem.innerHTML = "<span class='name'>" + listData[i].name + "</span>";
            listItem.innerHTML = html;

            // Add listItem to the listElement
            listElement.appendChild(listItem);
        }
    }

    function makeList() {

    $.get(url, function (d) {
        jList(d);
    });
}

    // Usage
    makeList();

      return (
        <list />
      )
    }
  }
  
  export default ItemTable;