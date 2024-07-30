import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupPopup from "./SignupPopup";
import LoginPopup from "./LoginPopup";

function Header() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  let link = [
    "https://www.kindmeal.my/images/follow_blog_grey.png",
    "https://www.kindmeal.my/images/follow_facebook_grey.png",
    "https://www.kindmeal.my/images/follow_instagram_grey.png",
  ];

  return (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="my-2">
          <img
            style={{ height: "4.35rem" }}
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt=""
          />
        </div>
        <div style={{ width: "20rem" }} className="d-flex flex-row-reverse">
          <div>
            {link.map((item,idx) => (
              <img
                key={idx}
                className="m-2"
                style={{ height: "2.5rem", display: "inline-block" }}
                src={item}
                alt=""
              />
            ))}
          </div>
        </div>
        <div
          className="d-flex align-items-center flex-row-reverse"
          style={{ height: "4.5rem", width: "30rem" }}
        >
          <div>
            <LoginPopup isOpen={isOpen} onClose={closePopup} />

            <button
              className="px-3 mx-2"
              style={{
                height: "1.7rem",
                borderRadius: ".5rem",
                border: "none",
                backgroundColor: "#35619f",
                color: "#ffffff",
              }}
            >
              Facebook
            </button>
            <button
              className="px-3 py-0 mx-2"
              style={{
                height: "1.7rem",
                borderRadius: ".5rem",
                border: "none",
                backgroundColor: "#666666",
                color: "#ffffff",
              }}
            >
              Email
            </button>

            <button
              className="px-3 py-0 mx-2"
              style={{
                height: "1.7rem",
                border: "none",
                background: "none",
                borderLeft: ".01rem solid grey",
              }}
              onClick={openPopup}
            >
              Sign Up
            </button>
            <SignupPopup isOpen={isOpen} onClose={closePopup} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
