import React from "react";
import HomeContainer from "../components/HomeContainer";
import Sliderr from "../components/Sliderr";

function Home() {
  let list = [
    {
      image: "https://www.kindmeal.my/images/intro_deal.png",
      title: "Get Great Deals",
      para: "Show our FREE digital coupons to instantly enjoy exciting deals",
    },
    {
      image: "https://www.kindmeal.my/images/intro_kindmoment.png",
      title: "Share KindMoments",
      para: "Spread the joy by sharing your yummy dining moments",
    },
    {
      image: "https://www.kindmeal.my/images/intro_menu.png",
      title: "Discover Delicious Food",
      para: "Explore the latest exquisite offerings and creative menus",
    },
    {
      image: "https://www.kindmeal.my/images/intro_friends.png",
      title: "Meet Food Lovers",
      para: "Make new, compassionate friends and share great food tips",
    },
  ];

  return (
    <>
      <Sliderr />
      <HomeContainer />
      <div class="container mt-5 text-center ">
        <center
          style={{
            color: "#666666",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform
        </center>
        <center style={{ color: "#999999", fontSize: "1.4rem" }}>
          Brought to you by
          <img
            class="m-3 "
            style={{ height: "3rem", cursor: "pointer" }}
            src="https://www.kindmeal.my/images/logo-petfinder-v2.png"
            alt="PetFinder.my"
          />
        </center>
        <center
          class="mt-4"
          style={{ color: "#888888", fontSize: "1.5rem", fontWeight: "500" }}
        >
          Instant coupon & dining. No upfront coupon payment, booking or
          printing.
        </center>
      </div>

      <div
        class="container text-center "
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "3.3rem auto",
        }}
      >
        {list.map((item) => (
          <div
            className="m-3  py-4 px-2"
            style={{
              width: "16rem",
              borderRadius: "1rem",
              boxShadow: "0 0 .2rem gray",
            }}
          >
            <img
              class="mb-3"
              style={{ height: "6rem", cursor: "pointer" }}
              src={item.image}
              alt=""
            />
            <div style={{ color: "#666666", fontSize: "1.3rem" }}>
              {item.title}
            </div>
            <div style={{ color: "#888888", fontSize: ".9rem" }}>
              {item.para}
            </div>
          </div>
        ))}
      </div>

      <div class="container text-center">
        <center style={{ color: "#888888", fontSize: "1.3rem" }}>
          Any restaurant or cafe can join KindMeal, vegetarian or not, as long
          as the deals and menu featured are meat-free.
        </center>
        <center style={{ color: "#888888", fontSize: "1.3rem" }}>
          Enjoy a great meat-free dining experience. Easily save animal lives,
          health, environment and money now!
        </center>
      </div>
      <center>
        <button
          style={{
            padding: ".8rem 4rem 1.1rem",
            margin: "5rem 0",
            borderRadius: "1rem",
            backgroundColor: "#f53838",
            color: "#ffffff",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          type="button"
        >
          <h1 class="m-0">Join KindMeal Now</h1>
          <p class="m-0">Your testy journey begins here</p>
        </button>
      </center>
      <div class="container text-center pb-5">
        <h3 style={{ color: "#888888" }}>Featured On</h3>
        <img
          src="https://www.kindmeal.my/images/media-feature2.png"
          class="img-fluid"
          alt="..."
        ></img>
      </div>
      <div style={{ backgroundColor: "#ececec" }}>
        <div class="container text-center">
          <img
            src="https://www.kindmeal.my/images/banner_whykindmeal.png"
            class="img-fluid"
            alt="..."
          ></img>
        </div>
      </div>
    </>
  );
}

export default Home;
