import React from "react";

function TopMeal() {
  return (
    <div>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "rgb(240, 240, 240)", padding: "2rem" }}
      >
        <div style={{ width: "70rem" }}>
          <p style={{ fontSize: "2rem" }}>
            <b>Meat-Free Deals </b>|Restaurants In Malayisa
          </p>
          <p>
            Browse delicious meat-free, vegetarian deals from top restaurants
            and cafes! Just click on "Get Free Coupon" to obtain instant
            discounts and dine at the restaurants. No upfront payment, booking
            or printing is needed. If you share it on social media, you'll even
            DOUBLE your discount!
          </p>
          <p>
            Download our <a href="#">mobile app</a> now to easily get coupons
            and start dining in a few seconds. Effortlessly save lives, health,
            environment and money now!
          </p>
          <div className="d-flex flex-row justify-content-between">
            <div class="m-2">
              <input
                type="text"
                class="ps-2 me-4"
                placeholder="Search Shop Or Deal"
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
                  marginRight: "1.5rem",
                  color: "#666666",
                  width: "13rem",
                  border: "none",
                  boxShadow: "0 0 .1rem gray",
                }}
                className="ps-2"
                aria-label="Default select example"
              >
                <option selected>All Category</option>
                <option value="1">Pasta</option>
                <option value="2">Burger</option>
                <option value="3">Breakfast</option>
                <option value="4">Salad</option>
                <option value="5">Bakery</option>
                <option value="6">Tea and Desert</option>
                <option value="7">Chinese</option>
                <option value="8">Indian</option>
                <option value="9">Soup</option>
                <option value="10">Cute</option>
              </select>

              <select
                style={{
                  display: "inline",
                  borderRadius: "0.4rem",
                  height: "2.5rem",
                  marginRight: "1.5rem",
                  color: "#666666",
                  width: "13rem",
                  border: "none",
                  boxShadow: "0 0 .1rem gray",
                }}
                className="ps-2"
                aria-label="Default select example"
              >
                <option selected>All Location</option>
                <option value="1">Kuala Lumpur</option>
                <option value="2">Ampang</option>
                <option value="3">Petaling Jaya</option>
                <option value="4">Bangsar</option>
                <option value="5">Bangsar South</option>
                <option value="6">Banting</option>
                <option value="7">Bukit Bintang</option>
                <option value="8">Bukit Jail</option>
                <option value="9">Cheras</option>
                <option value="10">Ipoh</option>
                <option value="11">Kapar</option>
                <option value="12">Kepong</option>
                <option value="13">Klang</option>
                <option value="14">Subang</option>
              </select>

              <button
                class="me-4 red-btn"
                style={{
                  backgroundColor: "#f53838",
                  color: "white",
                  padding: ".5rem 1.5rem",
                  borderRadius: ".5rem",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                Search Deals
              </button>
              <button
                class="green-btn"
                style={{
                  backgroundColor: "#04be5a",
                  color: "white",
                  padding: ".5rem 1.5rem",
                  borderRadius: ".5rem",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                Browse Resturanats
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMeal;
