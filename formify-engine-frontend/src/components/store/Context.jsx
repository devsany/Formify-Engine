import React, { createContext, useState } from "react";

// Create Context
export const DataContext = createContext();

// Create a Provider Component
export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems(newItem);
  };

  const updateItem = (id, updatedData) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log(items);
  };

  return (
    <DataContext.Provider
      value={{ items, setItems, addItem, updateItem, removeItem }}
    >
      {children}
    </DataContext.Provider>
  );
};