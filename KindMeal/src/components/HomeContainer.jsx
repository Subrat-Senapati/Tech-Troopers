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
          image:
            "https://scontent-sea1-1.xx.fbcdn.net/v/t15.5256-10/450676101_430646489969227_1007995254601196331_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=7965db&_nc_ohc=wtVZQLiXx-UQ7kNvgH3Y4D_&_nc_ht=scontent-sea1-1.xx&edm=ALdPpPkEAAAA&oh=00_AYDVseG3F1sltZwSEfo4-ZBg6vI8RDroPUGmEPGsWkmuPQ&oe=66A2E3B5",
          description:
            "Chimichurri. Drizzle It Over A Golden-brown Cauliflower Steak, Crispy Hasselback..",
        },
        {
          image:
            "https://scontent-sea1-1.xx.fbcdn.net/v/t15.5256-10/285840311_575290927493177_1999650704621387028_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=7965db&_nc_ohc=I0N4lGhbVLoQ7kNvgG01CKD&_nc_ht=scontent-sea1-1.xx&edm=ALdPpPkEAAAA&oh=00_AYD2GdqVuKGsEN_AMuTlFA55izKKKnvVPpN9LtM2zJebGA&oe=66A2F872",
          description: "Silly Rooster Jumps In A Suitcase — Find Out Why!",
        },
        {
          image:
            "https://scontent-sea1-1.xx.fbcdn.net/v/t15.5256-10/400320831_244132818683278_4600236744753013862_n.jpg?stp=dst-jpg_s720x720&_nc_cat=101&ccb=1-7&_nc_sid=7965db&_nc_ohc=XHndOKIimqoQ7kNvgGl3N20&_nc_ht=scontent-sea1-1.xx&edm=ALdPpPkEAAAA&oh=00_AYCUUEfVOi6AMJR7Agphu7TPhd_qr6JjxSPqmur20Roi_g&oe=66A2DBE5",
          description:
            "Jealous Swan Squawks Loudly If Anyone Gets Near His Lady",
        },
        {
          image:
            "https://scontent-sea1-1.xx.fbcdn.net/v/t15.5256-10/450930700_4513338058807070_3705430476125415635_n.jpg?stp=dst-jpg_s720x720&_nc_cat=108&ccb=1-7&_nc_sid=7965db&_nc_ohc=kQTwMkhAyJ0Q7kNvgE4f5fx&_nc_ht=scontent-sea1-1.xx&edm=ALdPpPkEAAAA&oh=00_AYAbMRtRFrspwEyw9sQcM5Hrv3QVfL51FDKjgOH6WeIC0A&oe=66A2FF2C",
          description:
            "Sticky Pineapple Rice Packed With Pineapple Coated In A Sticky Gochujang Glaze A..",
        },
        {
          image:
            "https://scontent-sea1-1.xx.fbcdn.net/v/t15.5256-10/450409898_442336845445541_1706796923263978391_n.jpg?stp=dst-jpg_s720x720&_nc_cat=104&ccb=1-7&_nc_sid=7965db&_nc_ohc=c6RhbYisOVAQ7kNvgG0y584&_nc_ht=scontent-sea1-1.xx&edm=ALdPpPkEAAAA&oh=00_AYAYT7kvEfMT_GetMWFsPJ9r5zCariXFssUhEFZ-EXn8Kg&oe=66A2EC05",
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
          image: "https://www.kindmeal.my/photos/member/35/35162-m.jpg",
          title: "SockChinKhor",
          description: "",
        },
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: "rgb(252, 252, 252)" }}>
      {listItem.map((list,idx) => (
        <div
        key={idx}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="cotainer"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "3rem",
              padding: "1rem 1rem 1rem",
              boxShadow: "0 0 .3rem gray",
              cursor: "pointer",
            }}
          >
            <div className="mb-2">
              <h4
                style={{
                  color: "#666666",
                  display: "inline",
                }}
              >
                {list.heading}
              </h4>

              {list.link.reverse().map((item, idx) => (
                <div style={{ display: "inline", float: "right" }} key={idx*5}>
                  <a
                    href="#"
                    className="px-3 a-decoration"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "500",
                      textDecoration: "none",
                      color: "#2184ff",
                    }}
                  >
                    {item}
                  </a>
                  <p
                    className="m-0"
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
              <div className="row">
                {list.list.map((item,idx) => (
                  <div key={idx} className="col my-1">
                    <img
                      src={item.image}
                      className="rounded"
                      alt={item.image}
                      style={{
                        height: "13rem",
                        width: "13rem",
                        borderRadius: "2rem",
                      }}
                    />
                    <div
                      className="rounded d-block text-center "
                      style={{
                        fontSize: ".9rem",
                        height: "auto",
                        width: "12rem",
                        color: "#777777",
                        fontWeight: "500",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="rounded d-block text-center"
                      style={{
                        fontSize: ".72rem",
                        width: "12rem",
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
