import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const AllLink = [
    { path: "/", name: "Home" },
    { path: "/mealdeal", name: "Meal Deals" },
    { path: "/kindmoments", name: "KindMoments" },
    { path: "/recipes", name: "Recipes" },
    { path: "/directory", name: "Directory" },
    { path: "/articles", name: "Articles" },
    { path: "/app", name: "Mobile App" },
    { path: "/help", name: "Help" },
  ];

  return (
    <>
      <div class="" style={{ backgroundColor: "#2bb673" }}>
        <ul
          class="nav nav-pills pb-0 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          {AllLink.map((item) => (
            <li class="nav-item" role="presentation">
              <button
                class="nav-link mx-3 py-1"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                
              >
                <Link to={item.path} style={{ color: "white", fontSize: "1.23rem",textDecoration:"none"}}>
                  {item.name}
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
