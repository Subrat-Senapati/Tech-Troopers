import React from "react";

function Directory() {
  let shopList = [
    "Selangor",
    "Kuala Lumpur",
    "Johor",
    "Kedah",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Pehang",
    "Perak",
    "Terengganu",
  ];

  return (
    <div className="Directory">
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "rgb(240, 240, 240)", padding: "2rem" }}
      >
        <div>
          <h2>Vegetarian Restaurants In Malaysia</h2>
          <p>
            Looking for even more delicious choices? Explore hundreds of
            vegetarian and vegan restaurants in Malaysia.
          </p>
          <p>
            Are you a restaurant or cafe owner? Boost your business with an
            attractive KindMeal profile and deals for FREE.{" "}
            <a href="#">Find out</a> more or
            <a href="#">contact us</a> now.
          </p>
          <div className="d-flex flex-row justify-content-between">
            <div class="m-2">
              <input
                type="text"
                class="ps-2 me-5"
                placeholder="Search Shop Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{
                  borderRadius: ".5rem",
                  height: "2.5rem",
                  border: "none",
                  color: "#666666",
                  width: "15rem",
                  boxShadow: "0 0 .1rem gray",
                }}
              />
              <select
                style={{
                  display: "inline",
                  borderRadius: "0.4rem",
                  height: "2.5rem",
                  marginRight: "2rem",
                  color: "#666666",
                  width: "13rem",
                  border:"none",
                  boxShadow: "0 0 .1rem gray",
                }}
                className="ps-2"
                aria-label="Default select example"
              >
                <option selected>All Shops in Malaysia</option>
                {shopList.map((list, idx) => (
                  <option value={idx}>{list}</option>
                ))}
              </select>
              <button
                class="mx-5"
                style={{
                  backgroundColor: "#f53838",
                  color: "white",
                  padding: ".5rem 2rem",
                  borderRadius: ".5rem",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                Search Shops
              </button>
              <button
                class="mx-5"
                style={{
                  backgroundColor: "#04be5a",
                  color: "white",
                  padding: ".5rem 2rem",
                  borderRadius: ".5rem",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                Add A Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directory;
