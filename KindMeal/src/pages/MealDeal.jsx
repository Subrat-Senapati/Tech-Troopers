import React from "react";
import TopMeal from "../components/TopMeal";
import MealHead from "../components/MealHead";
import FoodComponent from "../components/FoodComponent";


function MealDeal() {
    return (
        <div className="MealDeal">
            <TopMeal />
            <MealHead />
            <div style={{
                display: "flex",


            }}>
                <FoodComponent />
                <FoodComponent />
            </div>
            <div style={{
                display: "flex",
            }}>
                <FoodComponent />
                <FoodComponent />
            </div>
            <div style={{
                display: "flex",
            }}>
                <FoodComponent />
                <FoodComponent />
            </div>
            <div style={{
                display: "flex",
            }}>
                <FoodComponent />
                <FoodComponent />
            </div>
        </div>
    );
}

export default MealDeal;