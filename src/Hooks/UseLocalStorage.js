import React from "react";

function useLocalStorage(itemName, initialValue) {
    // Storages
    const localStorageItem = localStorage.getItem(itemName);
  
    let parseItems;
    if (!localStorageItem) {
    //   console.log('Rellenar LS con array vacio');
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parseItems = initialValue;
    } else {
      parseItems = JSON.parse(localStorageItem);
    }
  
    const [items, setItems] = React.useState(parseItems);
    const saveItems = (newItems) => {
      const stringItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringItems);
      setItems(newItems);
    }
  
    return [items, saveItems];
  
}

export {useLocalStorage};