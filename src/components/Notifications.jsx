import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import FoodBar from "./FoodBar";


const Notification = () => {
  const [foodData, setFoodData] = useState([]);

  const colRef = collection(db, "allfood");

  useEffect(() => {
    const getAllFood = () => {
      onSnapshot(colRef, (snapshot) => {
        let allfooddata = [];
        snapshot.docs.forEach((doc) => {
          allfooddata.push({ ...doc.data(), id: doc.id });
        });
        setFoodData(allfooddata);
      });
    };

    getAllFood();
  }, []);

  return <>
  {
      foodData.map((data) => {
          return <FoodBar data={data} key={data.id}/>
      })
  }
  </>;
};

export default Notification;
