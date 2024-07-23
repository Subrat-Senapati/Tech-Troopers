import React from "react";

function MobileApp() {
  return (
    <div className="mobileApp">
      <div className="d-flex justify-content-center" style={{ backgroundColor: "rgb(240, 240, 240)", padding:"2rem" }}>
        <div style={{padding:"5rem auto", margin:"0 5rem"}}>
          <h2 style={{color:"#444444"}}>KindMeal Mobile Apps on iOS & Android</h2>
          <p>
            Yummylicious food at irresistible prices. One click (alright, it's a
            tap) to grab a coupon, and just another click to use it. No waiting,
            no upfront payment.
          </p>
          <p>
            Share delicious moments and exhibit your camwhore skills. Follow
            foodies to discover great dining places.
          </p>
          <p>We know you're hungry. Time to download the app.</p>
          <p style={{color:"#888888"}}>Psst.. Save the cows, save the world!</p>
        </div>
      </div>
      <div style={{margin:"3rem auto"}}>
        <center >
          <img
            className="mx-5"
            style={{ height: "28rem" }}
            src="https://www.kindmeal.my/images/mobile_app_large.png"
            alt=""
          />
        </center>
      </div>
      <div>
        <center>
          <div className="my-5 pb-5 d-flex justify-content-center" style={{width:"70rem"}}>
            <img
              className="mx-4"
              style={{ height: "6rem" }}
              src="https://www.kindmeal.my/images/mobile_download_ios.png"
              alt=""
            />
            <img
              className="mx-4"
              style={{ height: "6rem" }}
              src="https://www.kindmeal.my/images/mobile_download_android.png"
              alt=""
            />
          </div>
        </center>
      </div>
    </div>
  );
}

export default MobileApp;
