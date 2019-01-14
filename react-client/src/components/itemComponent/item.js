import React, { Component } from 'react';
import $ from "jquery";
import "./item.css";

class ItemTable extends Component {
    render() {

    var url = "http://jst.edchavez.com/api/inventory/getInventory/";

    function jList(obj){
        // Make a container element for the list
        var listContainer = document.createElement("div");
        var listAttr = document.createAttribute("id");
        listAttr.value = "item";
        listContainer.setAttributeNode(listAttr);

        // Add it to the page
        if(document.getElementById("item") == null){
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
            listAttr.value = "items";
            listItem.setAttributeNode(listAttr);
            var html = 
            '<span class="name">' + "Name" + '</span>' + 
            '<span class="description">' + "Description" + '</span>' + 
            '<span class="price">' + "Price" + '</span>' +
            '<span class="itemId">' + "Item ID" + '</span>' + 
            '<span class="inStock">' + "In Stock" + '</span>';

            // Add the item text
            listItem.innerHTML = html;

            // Add listItem to the listElement
            listElement.appendChild(listItem);

            for (var i = 0; i < obj["items"].length; ++i) {
                // create an item for each one
                var listItem = document.createElement("li");
                var listAttr = document.createAttribute("class");
                listAttr.value = "items";
                listItem.setAttributeNode(listAttr);
                var html = 
                '<span class="name">' + obj["items"][i]["name"] + '</span>' + 
                '<span class="description">' + obj["items"][i]["description"] + '</span>' + 
                '<span class="price">' + obj["items"][i]["price"] + '</span>' +
                '<span class="itemId">' + obj["items"][i]["itemId"] + '</span>' + 
                '<span class="inStock">' + obj["items"][i]["inStock"] + '</span>';

                // Add the item text
                listItem.innerHTML = html;

                // Add listItem to the listElement
                listElement.appendChild(listItem);
            }
            
        document.getElementById("itemBox").appendChild(listContainer);
        }
    }

        function makeList() {
            $.get(url, function (d) {
                jList(d);
            });
        }

        // Usage
        makeList();
        }
    }
  
  export default ItemTable;