import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import MealDeal from "../pages/MealDeal"
import KindMoments from "../pages/KindMoments"
import Article from "../pages/Article"
import Directory from "../pages/Directory"
import Help from "../pages/Help"
import Recipes from "../pages/Recipes"
import MobileApp from "../pages/MobileApp"
import SignUp from "./SignUp";

import VegDir from "./VegDir";
import Resturant from "./Resturant";
import FoodMenu from "./FoodMenu";
import FoodMap from "./FoodMap";


const AllRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealdeal" element={<MealDeal />} />
        <Route path="/kindmoments" element={<KindMoments />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/directory" element={<VegDir />} />

        <Route path="/resturant" element={<Resturant />} />
        <Route path="/foodMenu" element={<FoodMenu />} />
        <Route path="/foodMap" element={<FoodMap />} />

        <Route path="/articles" element={<Article />} />
        <Route path="/app" element={<MobileApp />} />
        <Route path="/help" element={<Help />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
