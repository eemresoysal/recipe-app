import React from "react";
import { useLocation } from "react-router-dom";
import "./details.style.scss";
import Navbar from "../../Components/navbar/Navbar";
//!----------------------------------------

const Details = () => {
  const { state } = useLocation();
  console.log(state);
  const { ingredientLines, image, label, totalNutrients, calories } =
    state.recipe;

  return (
    <>
      <Navbar />
      <div className="detailBox">
        <div className="infoBox">
          <div className="recipe">
            <ul>
              {ingredientLines.map((item, idx) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>

          <div className="detailImg">
            <img src={image} alt="" />
            <h3>{label}</h3>
          </div>
          <div className="ingredients">
            <ul>
              <li>
                {totalNutrients.CA.label} :{" "}
                {totalNutrients.CA.quantity.toFixed(1)} {totalNutrients.CA.unit}
              </li>
              <li>
                {totalNutrients.CHOCDF.label} :{" "}
                {totalNutrients.CHOCDF.quantity.toFixed(1)}
                {totalNutrients.CHOCDF.unit}
              </li>
              <li>
                {totalNutrients.ENERC_KCAL.label} :{" "}
                {totalNutrients.ENERC_KCAL.quantity.toFixed(1)}
                {totalNutrients.ENERC_KCAL.unit}
              </li>
              <li>
                {totalNutrients.PROCNT.label} :{" "}
                {totalNutrients.PROCNT.quantity.toFixed(1)}
                {totalNutrients.PROCNT.unit}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
