import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.style.scss";
//*-------------------------------

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  // console.log(recipes);
  // const { image, label } = recipes;
  return recipes.map((item, idx) => {
    console.log(item);
    const { recipe } = item;
    return (
      <div className="container">
        <div className="cardBox">
          <div className="cardImg">
            <img src={recipe?.image} alt="" />
          </div>
          <button
            className="detailBtn"
            onClick={() => navigate("/details", { state: item })}
          >
            Details
          </button>
          <div>{recipe.label}</div>
        </div>
      </div>
    );
  });
};

export default Cards;
