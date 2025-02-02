import React from "react";
import HomeContainer from "../components/HomeContainer";
import Sliderr from "../components/Sliderr";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
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
      <div className="mt-5 text-center ">
        <center
          style={{
            color: "#666666",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform
        </center>
        <div className="d-flex justify-content-center">
          <center style={{ color: "#999999", fontSize: "1.4rem" }} className="my-4">
            Brought to you by
          </center>
          <center>
            <img
              className="m-3 "
              style={{ height: "3rem", cursor: "pointer" }}
              src="https://www.kindmeal.my/images/logo-petfinder-v2.png"
              alt="PetFinder.my"
            />
          </center>
        </div>

        <center
          className="mt-4"
          style={{ color: "#888888", fontSize: "1.5rem", fontWeight: "500" }}
        >
          Instant coupon & dining. No upfront coupon payment, booking or
          printing.
        </center>
      </div>

      <div
        className="text-center "
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "3.3rem auto",
        }}
      >
        {list.map((item,idx) => (
          <div
          key={idx}
            className="m-3  py-4 px-2 text-center"
            style={{
              width: "16rem",
              borderRadius: "1rem",
              boxShadow: "0 0 .2rem gray",
            }}
          >
            <img
              className="mb-3 mx-auto"
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

      <div className="text-center">
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
        onClick={() => {
          navigate("");
        }}
        
        className="home-btn"
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
          <h1 className="m-0">Join KindMeal Now</h1>
          <p className="m-0">Your testy journey begins here</p>
        </button>
      </center>
      <div>
        <div className="text-center pb-5">
          <h3 style={{ color: "#888888" }}>Featured On</h3>
          <center>
            <img
              src="https://www.kindmeal.my/images/media-feature2.png"
              className="img-fluid"
              alt="..."
            ></img>
          </center>
        </div>
        <div style={{ backgroundColor: "#ececec" }}>
          <div className="text-center">
            <center>
              <img
                src="https://www.kindmeal.my/images/banner_whykindmeal.png"
                className="img-fluid"
                alt="..."
              ></img>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
