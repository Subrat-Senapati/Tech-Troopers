import React, { useEffect, useState } from "react";
import DirNav from "./DirNav";

import staticmap1 from '../assets/staticmap 1.png'
import staticmap2 from '../assets/staticmap 2.png'
import staticmap3 from '../assets/staticmap 3.png'
import staticmap4 from '../assets/staticmap 4.png'
import staticmap5 from '../assets/staticmap 5.png'
import staticmap6 from '../assets/staticmap 6.png'
import staticmap7 from '../assets/staticmap 7.png'
import staticmap8 from '../assets/staticmap 8.png'
import staticmap9 from '../assets/staticmap 9.png'
import staticmap10 from '../assets/staticmap 10.png'

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

  let apiImage =[
    staticmap1,
    staticmap2,
    staticmap3,
    staticmap4,
    staticmap5,
    staticmap6,
    staticmap7,
    staticmap8,
    staticmap9,
    staticmap10
  ];

  const [vegData, setVegData] = useState([]);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(0);
  const [first, setFirst] = useState(0);

  async function getData() {
    let res = await fetch(
      `http://localhost:7000/vegData?_page=${page}&_per_page=10`
    );
    let fetchedData = await res.json();
    setVegData(fetchedData.data);
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
                class="mx-5 red-btn"
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
                class="mx-5 green-btn"
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
          {vegData.map((data,idx) => (
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
                    <a
                      className="a-decoration"
                      style={{ textDecoration: "none" }}
                      href="#"
                    >
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
                    src={apiImage[idx]}
                    alt=""
                  />
                </div>
                <div class="d-flex flex-row justify-content-between">
                  <button
                    className="a-decoration"
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
                    className="a-decoration"
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
                    className="a-decoration"
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
    </>
  );
}
export default VegDir;
