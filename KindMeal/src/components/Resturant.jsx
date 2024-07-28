import React from "react";
import DirNav from "./DirNav";

function Resturant() {
  let restaurantList = [
    {
      image: "https://www.kindmeal.my/photos/shop/1/126-cm.jpg",
      title: "Purple Cane Tea Cuisine",
      name: "Kuala Lumpur & 1 Branch",
      details:
        "Purple Cane Tea Cuisine is uniquely prepared, infusing tea in every dish to bring out the natural aroma and flavor of fo..",
    },
    {
      image: "https://www.kindmeal.my/photos/shop/5/520-cm.jpg",
      title: "Tea+ Artisan Tea Bar",
      name: "Kuala Lumpur, Wilayah Persekutuan",
      details:
        "Tea+ indulges you with the first artisan tea bar experience in Malaysia. We are here to revive the forgotten culture, t..",
    },
    {
      image: "https://www.kindmeal.my/photos/shop/6/604-cm.jpg",
      title: "Hainan Village",
      name: "Puchong & 5 Branches",
      details: `Recognized as the "First Hainanese Vegeterian Kopitiam in Malaysia” by the Malaysia Book of Records, Hainan Village stri..
`,
    },
    {
      image: "https://www.kindmeal.my/photos/shop/4/498-cm.jpg",
      title: "Honest Bakery Cafe",
      name: "Subang Jaya , Selangor",
      details:
        "Honest Bakery Cafe is a local cafe in Subang Jaya that serves and promotes meat-free meals to encourage vegetarianism. ..",
    },
    {
      image: "https://www.kindmeal.my/photos/shop/6/694-cm.jpg",
      title: "S.pace Cafe",
      name: "Kuala Lumpur, Wilayah Persekutuan",
      details:
        "Welcome to S.pace Cafe! Enjoy a cozy, inviting atmosphere as you savor our delicious plant-based meals and coffee. We ..",
    },
    {
      image: "https://www.kindmeal.my/photos/shop/5/514-cm.jpg",
      title: "Veggielicious Thai Cuisine",
      name: "Petaling Jaya, Selangor",
      details:
        "Veggielicious, an authentic Thai-vegan fusion cuisine that encompasses exceptional taste, offering the perfect dining ex..",
    },
    {
      image: "https://www.kindmeal.my/photos/shop/5/528-cm.jpg",
      title: "Vegelab",
      name: "Cheras, Kuala Lumpur",
      details:
        "Welcome to Vegelab Maxim Cheras Love Food, Love Life and Love Our Planet We aim to help raise consciousness around foo..",
    },
    {
      image: "https://www.kindmeal.my/photos/shop/3/392-cm.jpg",
      title: "Ring Zhi Vegetarian Restaurant",
      name: "Kepong, Kuala Lumpur",
      details:
        "This Chinese vegetarian restaurant is camouflaged amidst big shady trees, strategically located in the buzzing district ..",
    },
    {
      image: "https://www.kindmeal.my/photos/shop/5/505-cm.jpg",
      title: "Sushi Kitchen Kota Damansara",
      name: "Kuala Lumpur & 1 Branch",
      details:
        "A PLACE FOR US TO REWARDS OURSELVES. Sushi Kitchen™ established at year 2009. We are the 1st plant-based sushi in Mala..",
    },
    {
      image: "https://www.kindmeal.my/photos/shop/4/405-cm.jpg",
      title: "Yishensu @ The Curve",
      name: "Petaling Jaya, Selangor",
      details:
        "With beginnings in Ipoh and Kampar as manufacturers and suppliers of processed vegetarian food, Yishensu was known as Yi..",
    },
  ];
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "rgb(240, 240, 240)", padding: "1.5rem" }}
      >
        <div>
          <h2>Featured Restaurants In Malaysia</h2>
          <p>
            Want to know more about the featured restaurants and cafes? Hop in
            to their KindMeal shops to check out their meat-free deals and
            delicious food.
          </p>
          <p>
            Some restaurants listed may not have active deals, but they all
            certainly offer tasty meat-free food that you can try right away!
          </p>
        </div>
      </div>
      <DirNav />

      <div className="d-flex justify-content-center">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {restaurantList.map((item) => (
            <div>
              <div
                className="card m-4"
                style={{
                  width: "33rem",
                  border: "none",
                  boxShadow: "0 0 .2rem grey",
                }}
              >
                <div
                  style={{
                    width: "33rem",
                    height: "19rem",
                    boxShadow: "inset 0 0 5rem black",
                    borderRadius: ".3rem .3rem 0 0",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="py-3 px-3">
                  <p
                    style={{ fontSize: "1rem", color: "#666666" }}
                    className="mb-2"
                  >
                    {item.name}
                  </p>
                  <p style={{ fontSize: ".83rem", color: "#444444" }}>
                    {item.details}
                  </p>
                  <button
                    className="red-btn"
                    style={{
                      fontSize: "1.1rem",
                      border: "none",
                      backgroundColor: "#f53838",
                      borderRadius: "0.5rem",
                      padding: " .5rem 3rem",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    View Shop
                  </button>
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
    </>
  );
}
export default Resturant;
