import React, { useEffect, useState } from "react";
import DirNav from "./DirNav";

function FoodMenu() {

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

  const [foodList, setFoodList] = useState([]);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(0);
  const [first, setFirst] = useState(0);

  async function getData() {
    let res = await fetch(
      `http://localhost:7000/foodList?_page=${page}&_per_page=18`
    );
    let fetchedData = await res.json();
    setFoodList(fetchedData.data);
    setLast(fetchedData.last);
    setFirst(fetchedData.first);
  }
  useEffect(() => {
    getData();
  }, [page, last]);
  

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
          <li class="page-item ">
            <button
              disabled={page <= first}
              onClick={() => {
                setPage(page - 1);
              }}
              class="page-link"
            >
              prev
            </button>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              style={
                page === 1
                  ? { backgroundColor: "#40bfed", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              {page - 1 === 0 ? page : page === last ? page - 2 : page - 1}
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              style={
                page === 1
                  ? { backgroundColor: "white", color: "black" }
                  : page === last
                  ? { backgroundColor: "white", color: "black" }
                  : { backgroundColor: "#40bfed", color: "white" }
              }
            >
              {page === 1 ? page + 1 : page === last ? page - 1 : page}
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              style={
                page === last
                  ? { backgroundColor: "#40bfed", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              {page - 1 === 0 ? page + 2 : page === last ? page : page + 1}
            </a>
          </li>
          <li class="page-item">
            <button
              disabled={page >= last}
              onClick={() => {
                setPage(page + 1);
              }}
              class="page-link"
            >
              next
            </button>
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
            class="mt-3 red-btn"
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
