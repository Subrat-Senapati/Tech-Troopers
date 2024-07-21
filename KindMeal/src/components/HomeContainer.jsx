import React from "react";


function HomeContainer() {
  let listItem = [
    {
      heading: "Latest News & Videos",
      link: [
        "Save Lives with Your Blog",
        "News & Articles",
        "Follow Our Facebook",
      ],
      list: [
        {
          image: img1,
          description:
            "Chimichurri. Drizzle It Over A Golden-brown Cauliflower Steak, Crispy Hasselback..",
        },
        {
          image: img2,
          description: "Silly Rooster Jumps In A Suitcase — Find Out Why!",
        },
        {
          image: img3,
          description:
            "Jealous Swan Squawks Loudly If Anyone Gets Near His Lady",
        },
        {
          image: img4,
          description:
            "Sticky Pineapple Rice Packed With Pineapple Coated In A Sticky Gochujang Glaze A..",
        },
        {
          image: img5,
          description:
            "Baby Cow Who Was All Alone For Months Now Falls Asleep With His Chicken Every Night",
        },
      ],
    },
    {
      heading: "Yummylicious Moments",
      link: ["Secret Recipes", "Member Hot Picks", "Photo Moments"],
      list: [
        {
          image: "https://www.kindmeal.my/photos/moment/26/26831-55542-s.jpg",
          title: "Emilio Cibo E Vino",
          description: "FatJedi",
        },
        {
          image: "https://www.kindmeal.my/photos/moment/26/26824-55525-s.jpg",
          title: "Mama Kim Bandar Klang",
          description: "LimKengTiong",
        },
        {
          image: "https://www.kindmeal.my/photos/moment/26/26823-55520-s.jpg",
          title: "A Delicious KindMoment",
          description: "CindyChang",
        },
        {
          image: "https://www.kindmeal.my/photos/moment/26/26815-55483-s.jpg",
          title: "A Delicious KindMoment",
          description: "ChinMinNg",
        },
        {
          image: "https://www.kindmeal.my/photos/moment/26/26810-55465-s.jpg",
          title: "A Delicious KindMoment",
          description: "Bvelyn",
        },
      ],
    },
    {
      heading: "Discover Restaurants",
      link: ["Vegeterian", "Restaurant Menu", "Food Map"],
      list: [
        {
          image: "https://www.kindmeal.my/photos/item/0/315-3249-s.jpg",
          title: "Fresh Homemade Cakes",
          description: "",
        },
        {
          image: "https://www.kindmeal.my/photos/item/0/228-2282-s.jpg",
          title: "Hot Cafe Latte",
          description: "",
        },
        {
          image: "https://www.kindmeal.my/photos/item/0/664-10147-s.jpg",
          title: "Tofu Bibimbap (Soy Sauce)",
          description: "",
        },
        {
          image: "https://www.kindmeal.my/photos/item/0/528-6826-s.jpg",
          title: "Mushroom Soup",
          description: "",
        },
        {
          image: "https://www.kindmeal.my/photos/item/0/433-5018-s.jpg",
          title: "Maharajah Thali Set",
          description: "",
        },
      ],
    },
    {
      heading: "Amazing Superheroes",
      link: ["Latest Buzz", "Lifestyle Ambassadors", "Win gifts!"],
      list: [
        {
          image: "https://www.kindmeal.my/photos/member/32/32589-m.jpg",
          title: "YongKengCheng",
          description: "",
        },
        {
          image: "https://www.kindmeal.my/photos/member/11/11861-m.jpg",
          title: "RaindyKam",
          description: "",
        },
        {
          image: "https://www.kindmeal.my/photos/member/12/12292-m.jpg",
          title: "AngelYew",
          description: "",
        },
        {
          image: "https://www.kindmeal.my/photos/member/23/23510-m.jpg",
          title: "ConnieChin",
          description: "",
        },
        {
          image: "https://www.kindmeal.my/photos/member/41/41505-m.jpg",
          title: "SockChinKhor",
          description: "",
        },
      ],
    },
  ];
  return (
    <div style={{ backgroundColor: "rgb(252, 252, 252)" }}>
      {listItem.map((list) => (
        <div
          class="container"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            class="cotainer"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "3rem",
              padding: "1rem 1rem 1rem",
              boxShadow: "0 0 .3rem gray",
            }}
          >
            <div class="mb-2">
              <h4
                style={{
                  color: "#666666",
                  display: "inline",
                }}
              >
                {list.heading}
              </h4>

              {list.link.reverse().map((item, idx) => (
                <div style={{ display: "inline", float: "right" }}>
                  <a
                    href="#"
                    class="px-3"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </a>
                  <p
                    class="m-0"
                    style={{
                      display: "inline-block",
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      color: "#999999",
                    }}
                  >
                    {idx === 2 || idx === 1 ? "•" : ""}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <div class="row text-center">
                {list.list.map((item) => (
                  <div class="col" style={{ margin: "auto" }}>
                    <img
                      src={item.image}
                      class="rounded"
                      alt={item.image}
                      style={{
                        height: "13rem",
                        width: "13rem",
                        borderRadius: "2rem",
                      }}
                    />
                    <div
                      class="rounded d-block text-center"
                      style={{
                        fontSize: ".9rem",
                        height: "auto",
                        width: "12rem",
                        margin: "auto",
                        color: "#777777",
                        fontWeight:"500"
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      class="rounded d-block text-center"
                      style={{
                        fontSize: ".72rem",
                        width: "12rem",
                        margin: "auto",
                        color: "#333333",
                      }}
                    >
                      {item.description.length > 60
                        ? `${item.description.slice(0, 60)}..`
                        : item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeContainer;
