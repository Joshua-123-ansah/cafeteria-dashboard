import React from 'react'
import {db} from '../firebase';
import { deleteDoc, doc } from "firebase/firestore";

export default function FoodBar({data}) {

    const handleClick =async (id) => {
        const docRef = doc(db, "allfood", id);
        await deleteDoc(docRef);
      };

  return (
    <div className="notifications-wrapper">
        <div className="notification">
          <div className="notif-wrapper">
            <div className="notif-image">
              <img src="https://img.icons8.com/doodle/60/000000/cheese--v1.png" />
            </div>
            <div className="title-desc">
              <p className="food-title">{data.foodname}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <p>GH{data.price}.00</p>
            </div>
            <div className="notif-delete" >
              <a href="#" onClick={()=>handleClick(data.id)}>
                <span
                  class="iconify"
                  data-icon="gg:trash-empty"
                  data-width="25"
                  data-height="25"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
