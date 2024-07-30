import React from "react";
import { NavLink } from "react-router-dom";

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
      <div className="" style={{ backgroundColor: "#2bb673" }}>
        <ul
          className="nav pb-0 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          {AllLink.map((item,idx) => (
            <li className="nav-item nav-icon" role="presentation" key={idx}>
              <NavLink
                to={item.path}
                style={{
                  fontSize: "1.23rem",
                  textDecoration: "none",
                }}
              >
                <button
                  className="nav-link mx-3 py-1"
                  type="button"
                  style={{
                    borderRadius:"none",
                    color: "white",
                  }}
                >
                  {item.name}
                </button>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
