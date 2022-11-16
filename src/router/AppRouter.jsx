import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route path="/login" index element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
