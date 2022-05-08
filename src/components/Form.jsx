import { useState } from "react";
import { addFood } from "../firebase";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [extras, setExtras] = useState("");
  const [error, setError] = useState("");
  const [cafeteriaName, setCaficianName] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (foodName == "" || price == "" || image == "") {
      setError("Name, Price, Image are required fields so it must be filled");
    } else {
      await addFood(foodName, price, image, extras, cafeteriaName);
      setError("");
      console.log(cafeteriaName)

      setConfirm("Food Added Successfully");
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <div className="fields">
          <div style={{ color: "red", alignContent: "center" }}>
            <p>{error}</p>
          </div>
          <div style={{ color: "green", alignContent: "center" }}>
            <p>{confirm}</p>
          </div>
          <label> Name</label>
          <input
            placeholder="Food Name"
            className="field c_name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />

          <label>Price</label>
          <input
            placeholder="GHC 15.00"
            className="field c_name"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label>Image</label>
          <input
            placeholder="Image URL"
            className="field c_name"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <label>Extras</label>
          <input
            placeholder="Extras"
            className="field c_name"
            value={extras}
            onChange={(e) => setExtras(e.target.value)}
          />

          <label>Cafeteria Name</label>
          <select
            value={cafeteriaName}
            onChange={(e) => {setCaficianName(e.target.value)}}
            className="field c_name"
          >
           
            <option value="Akonor">Akonor</option>
            <option value="BigBen">BigBen</option>
          </select>

          <button className="create-btn" onClick={handleSubmit}>
            Add New Food
          </button>
        </div>
        <h6>You choose {}</h6>
      </div>
    </>
  );
};

export default Form;
