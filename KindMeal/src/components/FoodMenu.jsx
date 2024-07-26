import React from "react";
import DirNav from "./DirNav";

function FoodMenu() {
  let foodList = [
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10398-m.jpg",
      name: "Burger Nugget Vege",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10403-m.jpg",
      name: "Mexican Chocolate Bun",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10373-m.jpg",
      name: "Cartoon Spiderman",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10404-m.jpg",
      name: "Pizza Round Vege",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10414-m.jpg",
      name: "Butter Cheese Vege Bread",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10428-m.jpg",
      name: "Orange Swiss Roll",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10427-m.jpg",
      name: "Mocha Swiss Roll",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10380-m.jpg",
      name: "Unicon Cake",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10440-m.jpg",
      name: "Mocha Coffee Slice",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10396-m.jpg",
      name: "Vanilla Orange Cake",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10393-m.jpg",
      name: "Pandan Layer",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10434-m.jpg",
      name: "Chocolate Mousse Slice",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10409-m.jpg",
      name: "Almond Chocolate",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10418-m.jpg",
      name: "Pandan Raisin Bread",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
    {
      image: "https://www.kindmeal.my/photos/item/0/668-10377-m.jpg",
      name: "Chocolate Vanilla",
      details: "Natural Cake House Kapar",
      place: "Kapar, Selangor",
    },
  ];

  let locationList = [
    "Malaysia",
    "Johor",
    "Kedah",
    "Kelantan",
    "Kuala Lumpur",
    "Labuan",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Perak",
    "Perlis",
    "Pulau Pinang",
    "Sabah",
    "Sarawak",
    "Selangor",
    "Terengganu",
  ];

  let foodType = [
    "Appetizer	",
    "Dessert	",
    "Drink	",
    "Main",
    "Course",
    "Salad	",
    "Side",
    "Dish	",
    "Snack	",
    "Soup",
    "Other",
  ];

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "rgb(240, 240, 240)", padding: "1.5rem" }}
      >
        <div>
          <h2>
            Meat-Free Menu
            <span style={{ color: "#777777" }}> | Restaurants In Malaysia</span>
          </h2>
          <p>
            Explore delicious meat-free, vegetarian offerings of restaurants in
            Malaysia, search for your favorite dishes, compare similar items, or
            simply delight yourself with new food to try.
            <br />
            Click on an item to view further details of the food and restaurant,
            or refine your menu criteria at the bottom search box.
          </p>
        </div>
      </div>
      <DirNav />

      <div className="d-flex justify-content-center">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {foodList.map((item) => (
            <div>
              <div
                className="card m-4"
                style={{
                  width: "22rem",
                  border: "none",
                  boxShadow: "0 0 .2rem grey",
                }}
              >
                <div
                  style={{
                    height: "17rem",
                    width: "22rem",
                    borderRadius: ".3rem .3rem 0 0",
                    boxShadow: "inset 0 0 5rem black",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="py-2 px-3">
                  <p style={{ color: "#444444" }} className="mb-2">
                    <b>{item.name}</b>
                  </p>
                  <p
                    className="m-0"
                    style={{ fontSize: ".83rem", color: "#666666" }}
                  >
                    {item.details}
                  </p>
                  <p
                    className="mb-1"
                    style={{ fontSize: ".8rem", color: "#999999" }}
                  >
                    {item.place}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <button class="page-link">prev</button>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <button class="page-link">next</button>
          </li>
        </ul>
      </nav>




      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#e0e0e0" }}
      >
        <div className="m-5">
          <div>
            <h3 style={{ color: "#333333" }}>Search Food Menu</h3>
            <p>Refine your menu listing with foods of interest.</p>
          </div>
          <div className="d-flex">
            <div>
              <p
                style={{ color: "#333333", fontWeight: "500" }}
                className="mb-1"
              >
                Food Type
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                }}
              >
                {foodType.map((item) => (
                  <div className="pe-3">
                    <input type="checkbox" className="mx-1" checked />
                    <span style={{ color: "#333333" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p
                style={{ color: "#333333", fontWeight: "500" }}
                className="mb-1"
              >
                {" "}
                Search Shop or Food Name
              </p>
              <input
                type="text"
                class="ps-2 me-5"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{
                  borderRadius: ".5rem",
                  height: "2.4rem",
                  border: "none",
                  color: "#666666",
                  width: "20rem",
                  boxShadow: "0 0 .1rem gray",
                }}
              />
            </div>
            <div>
              <p
                className="mb-1"
                style={{ color: "#333333", fontWeight: "500" }}
              >
                Location
              </p>
              <select
                style={{
                  display: "inline",
                  borderRadius: "0.4rem",
                  height: "2.5rem",
                  marginRight: "2rem",
                  color: "#666666",
                  width: "15rem",
                  border: "none",
                  boxShadow: "0 0 .1rem gray",
                }}
                className="ps-2"
                aria-label="Default select example"
              >
                <option selected>Malaysia</option>
                {locationList.map((list, idx) => (
                  <option value={idx}>{list}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            class="mt-3"
            style={{
              backgroundColor: "#f53838",
              color: "white",
              padding: ".4rem 2rem",
              borderRadius: ".5rem",
              fontWeight: "bold",
              border: "none",
            }}
          >
            Search Menu
          </button>
        </div>
      </div>
      
    </>
  );
}
export default FoodMenu;
