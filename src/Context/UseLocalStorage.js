import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [items, setItems] = React.useState(initialValue);


  React.useEffect(
    () => {
      console.log('Carga inicial de LS###');
      // setTimeout(() => {

        try {
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
        setItems(parseItems);
        setLoading(false);
          
        } catch (error) {
          setError(error);
        }
      // }, 1000);
    }, []
  );


  const saveItems = (newItems) => {

    try {
      const stringItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringItems);
      setItems(newItems);
      setLoading(false);
      
    } catch (error) {
      setError(error);
      
    }

  }

  return {items, saveItems, loading, error};

}

export { useLocalStorage };