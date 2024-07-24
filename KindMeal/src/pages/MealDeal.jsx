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
        <div class="pt-4" style={{ backgroundColor: "#ececec" }}>
          <div class="text-center">
            <center>
              <img
                src="https://www.kindmeal.my/images/how_kindmeal_works.png"
                class="img-fluid"
                alt="..."
              ></img>
            </center>
          </div>
        </div>
      </>
    );
}

export default MealDeal;