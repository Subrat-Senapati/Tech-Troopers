import React from "react";
import DirNav from "./DirNav";

function FoodMap() {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "rgb(240, 240, 240)", padding: "1.5rem" }}
      >
        <div>
          <h2>Vegetarian Food & Restaurant Map</h2>
          <p>
            Browse the map to locate KindMeal restaurants with exciting
            meat-free deals and delicious menu, or check out other vegetarian /
            vegan restaurants.
          </p>
          <p>
            For restaurant owners that wish to list your business with an
            attractive KindMeal profile and feature your deals, you can find out
            more or contact us.
          </p>
        </div>
      </div>
      <DirNav />
      <div className="d-flex justify-content-center">
        <div className="my-3">
          <div>
            <p
              className="pe-5"
              style={{
                color: "#000000",
                fontSize: "1rem",
                display: "inline-block",
                fontWeight: "500",
              }}
            >
              Display:
            </p>
            <div style={{ display: "inline-block", width: "17rem" }}>
              <img
                style={{ height: "2.1rem", width: "2rem" }}
                src="https://www.kindmeal.my/images/map/marker-shop.png"
                alt=""
              />
              <input type="checkbox" className="mx-2" checked/>
              <p
                style={{
                  color: "#000000",
                  fontSize: "1rem",
                  display: "inline-block",
                }}
              >
                KindMeal Restaurants
              </p>
            </div>
            <div style={{ display: "inline-block", width: "22rem" }}>
              <img
                style={{ height: "2rem", width: "2rem" }}
                src="https://www.kindmeal.my/images/map/marker-red.png"
                alt=""
              />
              <input type="checkbox" className="mx-2" checked/>
              <p
                style={{
                  color: "#000000",
                  fontSize: "1rem",
                  display: "inline-block",
                }}
              >
                Other Vegetarian / Vegan Shops
              </p>
            </div>
          </div>
          <p
            className="m-0 py-2"
            style={{ color: "#000000", fontSize: ".9rem", fontWeight: "500" }}
          >
            Enter your Address or a Landmark to locate nearby shops
          </p>
          <p
            className="me-5"
            style={{
              color: "#000000",
              fontSize: ".9rem",
              display: "inline-block",
              fontWeight: "500",
            }}
          >
            Address / Landmark:
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
              width: "38rem",
              boxShadow: "0 0 .1rem gray",
            }}
          />
          <button
            class="me-5"
            style={{
              backgroundColor: "#f53838",
              color: "white",
              padding: ".4rem 2rem",
              borderRadius: ".5rem",
              fontWeight: "bold",
              border: "none",
            }}
          >
            Search Map
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="mb-5">
          <div style={{ height: "50rem", width: "67rem" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.73208419896!2d101.45227614319559!3d3.138143347622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4ececc1c7c97%3A0x524c8e31e929bc76!2sPetaling%20Jaya%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1722002270051!5m2!1sen!2sin"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ height: "50rem", width: "67rem" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default FoodMap;
