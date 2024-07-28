import React from "react";
import { NavLink } from "react-router-dom";

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
          {AllLink.map((item, idx) => (
            <div className="dir">
              <NavLink
                to={item.path}
                style={{
                  textDecoration: "none",
                  color: "#666666",
                  borderRadius: ".5rem",
                }}
                className="mx-5 py-2"
              >
                <button
                  class="btn btn-outline-primary"
                  for={idx}
                  className="px-3 py-2"
                  style={{
                    borderRadius: ".5rem",
                    border: ".01rem solid gray",
                    background: "#f8f8f8",
                    width: "14rem",
                  }}
                >
                  {item.name}
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DirNav;
