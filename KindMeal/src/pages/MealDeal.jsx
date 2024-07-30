import React from "react";
import TopMeal from "../components/TopMeal";
import MealHead from "../components/MealHead";
import KindFood from "../components/KindFood";


function MealDeal() {
    return (
        <>
        <TopMeal />
        <MealHead />
        <KindFood/>
        <div className="pt-4" style={{ backgroundColor: "#ececec" }}>
          <div className="text-center">
            <center>
              <img
                src="https://www.kindmeal.my/images/how_kindmeal_works.png"
                className="img-fluid"
                alt="..."
              ></img>
            </center>
          </div>
        </div>
      </>
    );
}

export default MealDeal;