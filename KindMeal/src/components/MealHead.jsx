import React from "react";
import { Card, Image, } from "@chakra-ui/react";

function MealHead() {
    return (

            <div class="container text-center"
            style={{boxShadow:"0 0 0.5rem gray",width:"73rem" ,marginTop:"3rem", marginBottom:"3rem",marginRight:"12rem"}}>
                <img
                    src='https://www.kindmeal.my/images/banner_recipe.jpg'
                    class="img-fluid"
                />
            </div>
    )
}

export default MealHead