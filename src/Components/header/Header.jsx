import React, { useState } from "react";
import Card from "../cards/Cards";
import "./header_style.scss";

const Header = ({ getData, selectedMeal, setQuery, mealType }) => {
  // let [meal, setMeal] = useState();

  // const input = (e) => {
  //   setMeal(e.target.value);
  //   setMeal = setQuery;
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    getData();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formBox">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            id="search"
            required
          />
          {/* <input onChange={input} type="text" /> */}
          <button>SEARCH</button>
          <select
            name=""
            id="mealType"
            onChange={(e) => selectedMeal(e.target.value)}
          >
            {mealType.map((item, idx) => {
              // console.log(item);
              return (
                <option key={idx} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Header;
