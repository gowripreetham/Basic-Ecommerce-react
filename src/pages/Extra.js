import React from "react";
import { useState, useEffect } from "react";
import { Auth } from "firebase/auth";
import { db, auth } from "../config/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const Extra = () => {
  const [items, setItems] = useState([]);

  const [newItemName, setNewItemName] = useState("");
  const [newItemColor, setNewItemColor] = useState("");
  const [newItemPrice, setNewItemPrice] = useState(0);

  const [updatedName, setUpdatedName] = useState("");

  const itemsCollectionRef = collection(db, "items");

  const getItems = async () => {
    try {
      const data = await getDocs(itemsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setItems(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteItem = async (id) => {
    const itemDoc = doc(db, "items", id);
    await deleteDoc(itemDoc);
    getItems();
  };

  const updateItemName = async (id) => {
    const itemDoc = doc(db, "items", id);
    await updateDoc(itemDoc, { name: updatedName });
    getItems();
  };

  useEffect(() => {
    getItems();
  }, []);

  const onSubmitItem = async () => {
    try {
      await addDoc(itemsCollectionRef, {
        name: newItemName,
        color: newItemColor,
        price: newItemPrice,
        userId: auth?.currentUser?.uid,
      });
      getItems();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Demonstration page for firebase tutorial</h1>
      <br></br>
      <div>
        <input
          placeholder="Name..."
          onChange={(e) => setNewItemName(e.target.value)}
        ></input>
        <input
          placeholder="Color..."
          onChange={(e) => setNewItemColor(e.target.value)}
        ></input>
        <input
          placeholder="Price..."
          type="number"
          onChange={(e) => setNewItemPrice(Number(e.target.value))}
        ></input>
        <button onClick={onSubmitItem}> Submit Item</button>
      </div>
      <br></br>
      <div>
        {items.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.color}</p>
            <button onClick={() => deleteItem(item.id)}> Delete Item</button>

            <input
              placeholder="new name.."
              onChange={(e) => setUpdatedName(e.target.value)}
            ></input>
            <button onClick={() => updateItemName(item.id)}>Update name</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extra;
