import React from "react";
import { Link } from "react-router-dom";

function DirNav() {
  const AllLink = [
    { path: "/directory", name: "Vegetarian Directory" },
    { path: "/resturant", name: "Featured Restaurants" },
    { path: "/foodMenu", name: "Food Menu" },
    { path: "/foodMap", name: "Food Map" },
  ];

  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <div className="d-flex">
          {AllLink.map((item,idx) => (
            <div>
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id={idx}
                autocomplete="off"
              />
              <button
                class="btn btn-outline-primary"
                for={idx}
                className="mx-5 px-3 py-2"
                style={{
                  borderRadius: ".5rem",
                  background: "#f8f8f8",
                  border: ".02rem solid gray",
                  width: "14rem",
                }}
              >
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "#666666" }}
                >
                  {item.name}
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DirNav;
