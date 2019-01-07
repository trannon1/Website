import React, { Component } from 'react';

class ItemTable extends Component {
    render() {
        // var item = [
        //     {
        //     "name": "Jon Snow Life 1",
        //     "description": "This is Jon's life no. 1 ",
        //     "price": 99,
        //     "itemId": "Sku-00",
        //     "inStock": true
        //     }
        // ]

        // var id = document.querySelector('#list');
        // item.forEach((i)=>{
        //     var newDiv = document.createElement('div')
        //     newDiv.innerHTML = i
        //     id.appendChild(newDiv)
        // });

        // var ul = document.createElement('ul');
        // document.getElementById('item').appendChild(ul);
        
        // names.forEach(function(item){
        //     var li = document.createElement('li');
        //     ul.appendChild(li);
        //     li.innerHTML += item;
        // });

//         var myArray = ['Value 1', ['Inner value 1', 'Inner value 2', 'Inner value 3', 'Inner value 4'], 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6'];

// function arrToUl(arr) {
// //   var root = document.getElementById('myList');
//   var ul = document.createElement('ul');
// //   var li;
  
// //   root.appendChild(ul); // append the created ul to the root
//   root.appendChild(ul);

//   arr.forEach(function(item) {
//     if (Array.isArray(item)) { // if it's an array
//       arrToUl(li, item); // call arrToUl with the li as the root
//       return;
//     }
    
//     li = document.createElement('li'); // create a new list item
//     li.appendChild(document.createTextNode(item)); // append the text to the li
//     ul.appendChild(li); // append the list item to the ul
//   });
// }

// // var div = document.getElementById('myList');

// arrToUl(myArray);

function makeList() {
    // Establish the array which acts as a data source for the list
    var listData = [
        'Blue',
        'Red',
        'White',
        'Green',
        'Black',
        'Orange'
    ];

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

    // Usage
    makeList();

    //   return (
    //     <div id="myList"></div>
    //   )
    }
  }
  
  export default ItemTable;