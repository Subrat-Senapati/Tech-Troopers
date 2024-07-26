import React from "react";

function ArtBody() {
    let Adata = [
        {
            imgscr: "https://www.kindmeal.my/photos/article/21/21937-l.jpg",
            title: "Turkeys Loves Riding Farm Tractor",
            add: "byKindMeal.my",
            text: "😂 ",
            date: "25 july",

        },
        {
            imgscr: "https://www.kindmeal.my/photos/article/21/21936-l.jpg",
            title: "Bombay Sandwich With Chai Masala",
            add: "byKindMeal.my",
            text: " 🌶️",
            date: "24 july",


        },
        {
            imgscr: "https://www.kindmeal.my/photos/article/21/21935-l.jpg",
            title: "Fabulous Feathered Flamingo Flock Turns Five",
            text: " This fabulous flamingo flock turns 5. ❤",
            add: "byKindMeal.my",
            date: "23 july",

        },
        {
            imgscr: "https://www.kindmeal.my/photos/article/21/21933-l.jpg",
            title: "Lamb Is Obsessed With His Mom's Coworker",
            text: "Crew encounter some curious creatures.",
            add: "byKindMeal.my",
            date: "22 july",

        },
        {
            imgscr: "https://www.kindmeal.my/photos/article/21/21931-l.jpg",
            title: "Crew Encounter Some Curious Creatures",
            text: "Crew encounter some curious creatures",
            add: "byKindMeal.my",
            date: "21 july",

        },
        {
            imgscr: "https://www.kindmeal.my/photos/article/21/21914-l.jpg",
            title: "Goat Loves Getting A Lift From His Frind",
            add: "byKindMeal.my",
            text: "Naughty goat hitches a ride on his horse bestie to reach his fav snack ",
            date: "20 july",

        },
        {
            imgscr: "https://www.kindmeal.my/photos/article/21/21907-l.jpg",
            title: "Clam Drunk",
            add: "byKindMeal.my",
            text: " ! 🏀",
            date: "19 july",


        },
        {
            imgscr: "https://www.kindmeal.my/photos/article/21/21898-l.jpg",
            title: "Cute Zoo Animals Play In Summer Sun",
            text: " Enjoying the summer! ☀️",
            add: "byKindMeal.my",
            date: "18 july",

        },
        {
            imgscr: "https://www.kindmeal.my/photos/article/21/21885-l.jpg",
            title: "Giant Blt Sandwich",
            text: "💥.",
            add: "byKindMeal.my",
            date: "17 july",

        },
        {
            imgscr: "https://www.kindmeal.my/photos/article/21/21871-l.jpg",
            title: "Gentle Red Panda Has A Birthday Party",
            text: "Gentle red panda enjoys a birthday party 🎂",
            add: "byKindMeal.my",
            date: "16 july",

        },
    ]
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>

                <div style={{ display: "flex",flexDirection:"column",justifyContent:"center" }}>
                    {Adata.map((value) =>
                        <div
                            style={{ boxShadow: "0 0 0.5rem gray", width: "70rem", height: "20rem",margin:"3rem",display:"flex",flexDirection:"row",borderRadius:"0.6rem"}}>
                            <div style={{ height: "20rem", width: "30rem", borderRadius: "0.6rem 0 0 0.6rem" }}>
                                <img
                                    style={{ height: "20rem", width: "30rem", borderRadius: "0.6rem 0 0 0.6rem" }}
                                    src={value.imgscr}

                                />
                            </div>
                            <div style={{ padding: "1.5rem 3rem" }}>
                                <p style={{ fontSize: "1.8rem" }}><b>{value.title}</b></p>
                                <p style={{ fontSize: "1.2rem" }}>{value.add}</p>
                                <p style={{ marginTop: "3rem", fontSize: "1.2rem", marginTop: "2.5rem" }}>{value.text} </p>
                                <button style={{
                                    backgroundColor: "#F53838", width: "12rem", height: "2.5rem", color: "#FFFFFF",
                                    borderRadius: "0.3rem", border: "none", fontSize: "1.3rem",margin: "1.5rem 0"
 
                                }}><b>View Video</b></button>
                                <span style={{ float: "right",margin: "1.5rem 0"}}>{value.date}</span>
                            </div>
                        </div>


                    )}
                </div>
            </div >
            

        </>

    );
}
export default ArtBody
