import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./home_style.scss";
import axios from "axios";
import Header from "../../Components/header/Header";
import Cards from "../../Components/cards/Cards";

//?---------------------------------------------------------------

const Home = () => {
  // const id = "68f53469";
  // const key = "c2d3df3157eca0705caf70528e025920";
  const [query, setQuery] = useState("egg");
  const [selectMeal, setSelectMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  // const getData = async () => {
  //   try {
  //     const { data } = await axios(url);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  const getData = async () => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=68f53469&app_key=c2d3df3157eca0705caf70528e025920&mealType=${selectMeal}`;
    try {
      const { data } = await axios(url);
      setRecipes(data.hits);
      // console.log(recipes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <Navbar />
      <Header
        getData={getData}
        setQuery={setQuery}
        setSelectMeal={setSelectMeal}
        mealType={mealType}
      />
      <div className="detailPart">
        <center>
          {recipes?.length === 0 && <h2>The Food can not be found</h2>}
        </center>

        {recipes?.length > 0 && <Cards recipes={recipes} />}
      </div>
    </div>
  );
};

export default Home;
