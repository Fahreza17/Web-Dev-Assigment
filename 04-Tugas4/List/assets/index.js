const inputBox = document.querySelector(".input-field input");
const btnAdd = document.querySelector(".input-field button");
const itemList = document.querySelector(".itemList");
const database = new Map();

btnAdd.addEventListener('click', () => {
    const ITEM_KEY = inputBox.value.toUpperCase();
    const ITEM_VALUE = inputBox.value;
  
    const listItem = document.createElement('li');
    const textItem = document.createElement('p');
    const btnDelete = document.createElement('button');
    const counter = document.createElement('button');
  
    if (ITEM_VALUE === '') {
      alert("Ga Boleh Kosong");
      inputBox.focus();
      return;
    }

    var count = 1;

    if (database.has(ITEM_KEY)) {
      count++;
      console.log(count);
      inputBox.value = '';
      inputBox.focus();
      return;
    }

    database.set(ITEM_KEY, ITEM_VALUE);
  
    // NOTE: Add attribute
    listItem.classList.add('list-item'); // NOTE: Add Class
  
    // NOTE: Add value
    textItem.textContent = ITEM_VALUE;
    btnDelete.textContent = 'Delete';

    counter.classList.add('hitunglah');



    // NOTE: Combine elements
    listItem.append(textItem, btnDelete, counter);
    itemList.appendChild(listItem);
  
    // NOTE: Handle click event for delete button
    btnDelete.addEventListener('click', () => {
      itemList.removeChild(listItem);
    });
  
    inputBox.value = '';
    inputBox.focus();
  });

