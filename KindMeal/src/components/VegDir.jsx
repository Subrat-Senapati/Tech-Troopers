import React, { useEffect, useState } from "react";
import DirNav from "./DirNav";

function VegDir() {

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

  
  // const [data, setData] = useState([]);
  // const [page, setPage] = useState(1);
  // const [last, setLast] = useState(0);

  // async function getData(){
  //     let res = await fetch('');
  //     let fetchedData = await res.json();
  //     setData(fetchedData.data);
  //     setLast(fetchedData.last);
  // }
  // useEffect(() =>{
  //     getData();
  // },[page,last]);
  let vegData = [
    {
      heading: "Ador Cafe",
      description:
        "Ador is abbreviated from the word “Adorable” meaning “to love”. We founded Ador to inspire more people of all races and religions to go meatless because we strive hard to nurture our Mother Earth to be a more sustainable world by consciously consuming meatless food which leave lower carbon impact. Our team consisting of first-rate chefs and baristas is fully committed by serving only the finest meatless meals in Malaysia. Our earnest hope is to see our dearest customers WOW at their first meal in Ador and then return for the subsequent meals with their friends to prove to them that Ador’s meatless meals can be as good as or even better than the normal meat diets. Let’s influence more people to go meatless together! Yours Sincerely, Aery & Regina Remarks: All our food are vegan, vegetarian and Muslim-friendly. All food do not contain Allium vegetables such as garlic, onion, leek, shallot and chive.",
      address:
        "LG1.07, KL Gateway Mall, 2, Jalan Kerinchi, Gerbang Kerinchi Lestari, , 59200 Kuala Lumpur, Wilayah Persekutuan",
      phone: "03-29359793",
      openTime: "Mon - Fri: 7.30am - 10pm; Sat - Sun & PH: 10am - 10pm",
      image:
        "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.1141124000000000,101.6632718000000000&markers=color:red%7C3.1141124000000000,101.6632718000000000&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE",
    },
    {
      heading: "Alam N-Ion",
      description:
        "We serve delicious home-cooked vegetarian meals, crafted with the healthiest ingredients and plenty of love. We also sell natural, handmade clay and wooden Buddhist crafts, health supplements, and homemade beauty products.",
      address:
        "15, Jalan 12/144A, Taman Bukit Cheras , 56000 Kuala Lumpur, Wilayah Persekutuan",
      phone: "019-275 9973",
      openTime: "Fri - Wed: 9am - 4pm; Thu: Closed",
      image:
        "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.0702449881221310,101.7487715184688600&markers=color:red%7C3.0702449881221310,101.7487715184688600&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE",
    },
    {
      heading: "All Vegetarian Mart",
      description:
        "All Vegetarian Mart is a cafe-style vegetarian mart, with selected vegan options available. We delight you with a delicious range of Asian and Western cuisines, complemented with an assortment of quality beverages. Dine in and take away are available. Our mart features a range of quality groceries and products.",
      address:
        "R-01-1 (First Floor), M-City Ampang 326, Jalan Ampang, 50450 Kuala Lumpur, Wilayah Persekutuan",
      phone: "012-367 6368",
      openTime: "Wed - Mon: 10am - 6.30pm; Tue: Closed",
      image:
        "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.1587839999999950,101.7479203415585800&markers=color:red%7C3.1587839999999950,101.7479203415585800&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE",
    },
    {
      heading: "AmazonVegan",
      description:
        "AMAZONVEGAN is 100% vegan & tasty. Think fast food, but a healthier alternative. Serving burgers, tacos, milkshakes, sugar-free soft serve - everything produced in-house. No added sugar and no animal products! We believe in making alternative diet accessible and affordable for all. Connection beyond food, AMAZONVEGAN is a space of unity where anyone & everyone can share a moment of joy through delicious plant-based meals.",
      address: "GF-02, 163 Retail Park, 50480 Mont Kiara , Wilayah Persekutuan",
      phone: "60122871916",
      openTime: "Mon to Sun: 11am - 10pm",
      image:
        "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.1664583000000000,101.6523213000000000&markers=color:red%7C3.1664583000000000,101.6523213000000000&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE",
    },
    {
      heading: "Annalakshmi Vegetarian Restaurant",
      description: "",
      address:
        "114-116, Jalan Berhala, Brickfields, Kuala Lumpur, 50470, Wilayah Persekutuan",

      phone: "03-22723799, 03-22843799",
      openTime: "Tue-Sun 11am-3pm, 6:30-10pm",
      image:
        "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.1274530000000000,101.6878660000000000&markers=color:red%7C3.1274530000000000,101.6878660000000000&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE",
    },
    {
      heading: "Ba Xian Vegetarian Court",
      description: "",
      address:
        "12,14,14-1, Persiaran Mergatua, Kepong Baru, Kuala Lumpur, 52100, Wilayah Persekutuan",

      phone: "03-62778052",
      openTime: "Daily 10am-10pm",
      image:
        "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.1502100000000000,101.7077000000000000&markers=color:red%7C3.1502100000000000,101.7077000000000000&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE",
    },
    {
      heading: "Bakti Woodlands Vegetarian Food Cafe",
      description: "",
      address:
        "55 Leboh Ampang (at near Masjid Jamek LRT station), Kuala Lumpur, 50100, Wilayah Persekutuan",
      phone: "03-20342399",
      openTime: "Mon-Sun 7:30am-9:30pm",
      image:
        "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.1492500000000000,101.6975020000000000&markers=color:red%7C3.1492500000000000,101.6975020000000000&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE",
    },
    {
      heading: "Berjaya Cafe",
      description:
        "Berjaya Cafe, the epitome for the vegetarian lovers that brings the opulence, style, and is entwined with the gastronomic taste from the best chef’s in town. With the current trend of lifestyle that focuses not only on health and well-being, our Berjaya Cafe brings you the ambiance of a contemporary dining restaurant overlooking the skyline and magnificent city view of Kuala Lumpur. We also took measures to serve our guests with an edible selection of freshly picked ingredients. Choose from our variety spread of vegetarian cuisine, we can assure our guests will savour only the best in vegetarian gastronomic experience.",
      address:
        "Level 14 West, Berjaya Times Square Hotel, No. 1, Jalan Imbi, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan",
      phone: "03-21178000",
      openTime: "aily: 6:30am - 9:00pm",
      image:
        "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.1418525153562450,101.7098808288574200&markers=color:red%7C3.1418525153562450,101.7098808288574200&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE",
    },
    {
      heading: "Beyond Veggie - Nexus Bangsar South Branch",
      description:
        "A refreshing Meatless Dining Concept from Secret Recipe Cakes & Café Group. Extensive Menu range inspired by all fresh and natural products with a selection of natural products and ingredients with no colouring or preservatives, no MSG, just healthy and delicious choices! Beyond Veggie by Secret Recipe was shortlisted Best Healthy Eats in the Time Out KL Food Awards 2013 and 2014.",
      address:
        "Unit G-8, Ground Floor, Nexus, No. 7, Jalan Kerinchi, 59200 Kuala Lumpur, Wilayah Persekutuan",
      phone: "+603-2242 1473",
      openTime: "Mon-Sun, 10am-10pm",
      image:
        "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.1098986934892126,101.6655226349394000&markers=color:red%7C3.1098986934892126,101.6655226349394000&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE",
    },
    {
      heading: "Beyond Veggie - TTDI Branch",
      description:
        "A refreshing Meatless Dining Concept from Secret Recipe Cakes & Café Group. Extensive Menu range inspired by all fresh and natural products with a selection of natural products and ingredients with no colouring or preservatives, no MSG, just healthy and delicious choices! Beyond Veggie by Secret Recipe was shortlisted Best Healthy Eats in the Time Out KL Food Awards 2013 and 2014.",
      address:
        "Lot 54, Ground Floor, Jalan Tun Mohd. Fuad 1, Taman Tun Dr Ismail, 600000 Kuala Lumpur, Wilayah Persekutuan",
      phone: "+603-7722 1142",
      openTime: "Mon-Sun, 10am-10pm",
      image:
        "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.1405315035228310,101.6295527368674800&markers=color:red%7C3.1405315035228310,101.6295527368674800&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE",
    },
  ];

  return (
    <>
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
                  border: "none",
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
      <DirNav />
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {vegData.map((data) => (
            <div>
              <div
                className="card m-4"
                style={{
                  width: "35rem",
                  padding: "2rem",
                  border: "none",
                  boxShadow: "0 0 .2rem grey",
                }}
              >
                <h3 style={{ color: "#222222" }}>{data.heading}</h3>
                <p style={{ color: "#444444" }}>
                  {data.description.length > 60
                    ? `${data.description.slice(0, 180)}... `
                    : data.description}
                  {data.description.length > 60 ? (
                    <a style={{ textDecoration: "none" }} href="#">
                      show more
                    </a>
                  ) : (
                    ""
                  )}
                </p>
                <hr />
                <h5 class="m-0" style={{ color: "#444444" }}>
                  Address
                </h5>
                <p style={{ color: "#444444" }}>{data.address}</p>
                <h5 class="m-0" style={{ color: "#444444" }}>
                  Phone
                </h5>
                <p style={{ color: "#444444" }}>{data.phone}</p>
                <h5 class="m-0" style={{ color: "#444444" }}>
                  Opening Hours
                </h5>
                <p style={{ color: "#444444" }}>{data.openTime}</p>
                <div
                  style={{ height: "230px" }}
                  className="d-flex justify-content-center"
                >
                  <img
                    style={{ height: "200px", width: "450px" }}
                    class="img-fluid"
                    src={data.image}
                    alt=""
                  />
                </div>
                <div class="d-flex flex-row justify-content-between">
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      color: "#2184ff",
                      fontSize: "1.3rem",
                    }}
                  >
                    Visit Website
                  </button>
                  <span style={{ fontSize: "1.3rem", color: "#888888" }}>
                    |
                  </span>
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      color: "#2184ff",
                      fontSize: "1.3rem",
                    }}
                  >
                    Get Direction
                  </button>
                  <span style={{ fontSize: "1.3rem", color: "#888888" }}>
                    |
                  </span>
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      color: "#2184ff",
                      fontSize: "1.3rem",
                    }}
                  >
                    Nearby Shops
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
export default VegDir;
