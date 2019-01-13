import React, { Component } from 'react';
import $ from "jquery";
import "./shippingOption.css";

class ShippingOptionTable extends Component {
    render() {

    var url = "http://jst.edchavez.com/api/shipping/";

    function jList(obj){
        // Make a container element for the list
        var listContainer = document.createElement("div");
        var listAttr = document.createAttribute("id");
        listAttr.value = "shippingOption";
        listContainer.setAttributeNode(listAttr);

        // Add it to the page
        if(document.getElementById("shippingOption") == null){
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

        // create an item for each one
        var listItem = document.createElement("li");
        var listAttr = document.createAttribute("class");
        listAttr.value = "shippingOptions";
        listItem.setAttributeNode(listAttr);
        var html = 
        '<span class="carrierName">' + "Carrier Name" + '</span>' + 
        '<span class="shipCost">' + "Ship Cost" + '</span>' + 
        '<span class="shipOptionId">' + "Ship Option Id" + '</span>' +
        '<span class="shipOptionName">' + "Ship Option Name" + '</span>';

        // Add the item text
        listItem.innerHTML = html;

        // Add listItem to the listElement
        listElement.appendChild(listItem);

        for (var i = 0; i < obj.length; ++i) {
            // create an item for each one
            var listItem = document.createElement("li");
            var listAttr = document.createAttribute("class");
            listAttr.value = "shippingOptions";
            listItem.setAttributeNode(listAttr);
            var html = 
            '<span class="carrierName">' + obj[i]["carrierName"] + '</span>' + 
            '<span class="shipCost">' + obj[i]["shipCost"] + '</span>' + 
            '<span class="shipOptionId">' + obj[i]["shipOptionId"] + '</span>' +
            '<span class="shipOptionName">' + obj[i]["shipOptionName"] + '</span>';

            // Add the item text
            listItem.innerHTML = html;

            // Add listItem to the listElement
            listElement.appendChild(listItem);
        }
        document.getElementById("shippingBox").appendChild(listContainer);
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
  
  export default ShippingOptionTable;