import React, { Component } from 'react';
import $ from "jquery";
import "./promotion.css";

class PromotionTable extends Component {
    render() {

    var url = "http://jst.edchavez.com/api/promo/";

    function jList(obj){
        // Make a container element for the list
        var listContainer = document.createElement("div");
        var listAttr = document.createAttribute("id");
        listAttr.value = "promotion";
        listContainer.setAttributeNode(listAttr);

        // Add it to the page
        if(document.getElementById("promotion") == null){
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
        listAttr.value = "promotions";
        listItem.setAttributeNode(listAttr);
        var html = 
        '<span class="orderSubTotal">' + "Order SubTotal" + '</span>' + 
        '<span class="promoAmt">' + "Promotion Amount" + '</span>' + 
        '<span class="promoId">' + "Promotion ID" + '</span>' +
        '<span class="promotionName">' + "Promotion Name" + '</span>' + 
        '<span class="start">' + "Start" + '</span>' +
        '<span class="end">' + "End" + '</span>' +
        '<span class="minimumOrderValue">' + "Minimum Order Value" + '</span>' +
        '<span class="promotionType">' + "Promotion Type" + '</span>';

        // Add the item text
        listItem.innerHTML = html;

        // Add listItem to the listElement
        listElement.appendChild(listItem);

        for (var i = 0; i < obj.length; ++i) {
            // create an item for each one
            var listItem = document.createElement("li");
            var listAttr = document.createAttribute("class");
            listAttr.value = "promotions";
            listItem.setAttributeNode(listAttr);
            var html = 
            '<span class="orderSubTotal">' + obj[i]["orderSubTotal"] + '</span>' + 
            '<span class="promoAmt">' + obj[i]["promoAmt"] + '</span>' + 
            '<span class="promoId">' + obj[i]["promoId"] + '</span>' +
            '<span class="promotionName">' + obj[i]["promotionName"] + '</span>' + 
            '<span class="start">' + obj[i]["start"] + '</span>' +
            '<span class="end">' + obj[i]["end"] + '</span>' +
            '<span class="minimumOrderValue">' + obj[i]["minimumOrderValue"] + '</span>' +
            '<span class="promotionType">' + obj[i]["promotionType"] + '</span>';

            // Add the item text
            listItem.innerHTML = html;

            // Add listItem to the listElement
            listElement.appendChild(listItem);
        }
        document.getElementById("promotionBox").appendChild(listContainer);
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
  
  export default PromotionTable;