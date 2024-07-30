import React from "react";

function Footer() {
  let list = [
    {
      title: "General",
      li: [
        "Home",
        "Sign Up",
        "Businesses / Restaurateurs",
        "Advertising",
        "About KindMeal.my",
        "Help & FAQ",
        "Terms & Conditions",
        "Inspiring Partners",
        "Lifestyle Ambassadors",
        "Jobs & Careers",
        "Contact Us",
      ],
    },
    {
      title: "Features",
      li: [
        "Meat-Free Deals",
        "Tasty Menus",
        "Kind Moments",
        "Meat-Free Recipes",
        "Member Recommendations",
        "Featured Restaurants",
        "Vegetarian & Vegan Directory",
        "Food Map",
        "Become A Superhero",
        "Vegan News & Vegetarian Articles",
        "Latest Comments",
      ],
    },
    {
      title: "Social Media",
      li: ["KindMeal Widget", "Facebook", "Instagram", "Twitter"],
    },
    {
      title: "Mobile",
      li: ["iPhone & iPod App", "Android App"],
    },
    {
      title: "Exciting Promos",
      li: [
        "Gadhimai: Ending Mass Slaughter",
        "Free Meals",
        "Food Bloggers",
        "Uber CHIRP",
        "Jane Goodall Contest",
        "Win Digi iPhone 6",
        "Feed The Poor",
        "Win Superhero Gifts",
        "Win an iPad Mini 3",
      ],
    },
    {
      title: "PetFinder.my",
      li: [
        "Adopt A Pet",
        "Smartphone Apps",
        "WAGazine",
        "Discussion Forum",
        "Medical Fund",
      ],
    },
  ];
  return (
    <>
      <footer className="p-4" style={{ color: "white" ,backgroundColor:"#2bb673"}}>
        <div className="d-flex justify-content-around flex-wrap">
          {list.map((item) => (
            <div className="mx-3" key={item.title} style={{ width: "auto",height:"auto"}}>
              <h5 className="m-0" style={{fontSize:"1rem"}}>{item.title}</h5>
              <ul className="p-0 m-0">
                {item.li.map((item) => (
                  <li
                    key={item}
                    style={{ listStyleType: "none", fontSize: ".78rem" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <center style={{fontSize:".63rem" ,marginTop:".8rem"}}>
          Copyright © KindMeal.my, 2014 - 2024. All rights reserved.
        </center>
        <center style={{fontSize:".63rem"}}>
          This website promotes compassionate, meat-free dining experience. Some
          food may contain eggs, dairy products or alcohol, please view
          individual listings for details.
        </center>
      </footer>
    </>
  );
}

export default Footer;
