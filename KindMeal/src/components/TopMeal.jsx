import React from "react";


function TopMeal() {
    return (
        <div style={{
            paddingBottom: "7rem", backgroundColor: "rgb(235, 244, 246)", height: "17rem",
            textAlign: "center", display: "flex", justifyContent: "center",
        }} class="container ">
            <div style={{ textAlign: "left" }}>
                <div >
                    <p style={{ fontSize: "2rem", }}>
                        "<b>Meat-Free Deals </b>|Restaurants In Malayisa
                    </p>
                    <br />
                    <p >
                        Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!

                    </p>
                </div>
                <br />
                <p >
                    Download our mobile app now to easily get coupons and start dining in a few seconds. Effortlessly save lives, health, environment and money now!

                </p>
                <div style={{
                    paddingTop: "0.2rem",

                }}>

                    <input style={{width:"17rem",height:"2.5rem",
                        borderRadius:"0.4rem",border:"0.1rem solid white",
                        marginRight:"2rem"
                    }} type="text" placeholder="Search Shop Or Deal" />
                    <input style={{width:"14rem",height:"2.5rem",
                        borderRadius:"0.4rem",border:"0.1rem solid white",
                        marginRight:"2rem"
                    }} type="text" placeholder="All Category" />
                    <input style={{width:"14rem",height:"2.5rem",
                        borderRadius:"0.4rem",border:"0.1rem solid white",
                        marginRight:"2rem"
                    }} type="text" placeholder="All Location" />
                    <button style={{ color: "white", backgroundColor: "red", width:"12rem",height:"2.5rem",
                        borderRadius:"0.4rem",border:"0.1rem solid white",
                        marginRight:"2rem"}}><b>Search Deals</b></button>
                    <button style={{ color: "white", backgroundColor: "green", width:"12rem",height:"2.5rem",
                        borderRadius:"0.4rem",border:"0.1rem solid white",
                        marginRight:"2rem"}}><b>Browse Resturanats</b></button>

                </div>
            </div>
        </div>

    )
}

export default TopMeal