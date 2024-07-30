import React, { useEffect, useState } from "react";
import DirNav from "./DirNav";

function Resturant() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(0);
  const [first, setFirst] = useState(0);

  async function getData() {
    let res = await fetch(
      `http://localhost:7000/restaurantList?_page=${page}&_per_page=10`
    );
    let fetchedData = await res.json();
    setRestaurantList(fetchedData.data);
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
          {restaurantList.map((item, idx) => (
            <div key={idx}>
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
        <ul className="pagination justify-content-center">
          <li className="page-item ">
            <button
              disabled={page <= first}
              onClick={() => {
                setPage(page - 1);
              }}
              className="page-link"
            >
              prev
            </button>
          </li>
          <li className="page-item">
            <a
              className="page-link"
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
          <li className="page-item">
            <a
              className="page-link"
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
          <li className="page-item">
            <a
              className="page-link"
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
          <li className="page-item">
            <button
              disabled={page >= last}
              onClick={() => {
                setPage(page + 1);
              }}
              className="page-link"
            >
              next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Resturant;
