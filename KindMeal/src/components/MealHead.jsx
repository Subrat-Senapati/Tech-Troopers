import React from "react";
import { Card, Image } from "@chakra-ui/react";

function MealHead() {
  return (
    <div class="d-flex justify-content-center">
      <div
        style={{
          width: "73rem",
          boxShadow: "0 0 0.3rem gray",
          margin: "3rem ",
          cursor: "pointer",
        }}
      >
        <img
          style={{ width: "73rem" }}
          src="https://www.kindmeal.my/images/banner_recipe.jpg"
          class="img-fluid"
        />
      </div>
    </div>
  );
}

export default MealHead;
