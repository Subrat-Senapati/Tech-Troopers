import React, { useEffect, useState } from "react";
import { Card, CardBody, Image, CardFooter, Text, Divider, Stack, } from "@chakra-ui/react";



function KindFood() {
    // const [data, setData] = useState([]);
    // const [page, setPage] = useState(1);
    // const [last, setLast] = useState(0);

    // async function getData(){
    //     let res = await fetch('');
    //     let fetchedData = await res.json();
    //     setData(fetchedData.data);
    //     setLast(fetchedData.last);
    // }
    // useEffect(() =>{
    //     getData();
    // },[page,last]);

    let Sdata = [
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/6/634-5844-l.jpg",
            title: "Veggielicious Thai Cuisine",
            about: "Petaling Jaya,Selangor",
            text: "Experience the vibrant flavors of Thailand at Veggielicious Thai! Dive into a diverse selection of authentic vegan dishes in our c..",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/4/457-2109-l.jpg",
            title: "The Black Cat Cafe",
            about: "Kuala Lumpur,Wilayah Persekutuan",
            text: "Western and Asian cuisine, all prepared in our humble kitchen with utmost passion and love. On Weekdays, select ANY items from ..",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/3/383-1189-l.jpg",
            title: "Dinning Bowl",
            about: "Kuala Lumpur,Wilayah Persekutuan",
            text: "Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality ingredients, in an envir...",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/6/642-3775-l.jpg",
            title: "Lohas Vegetarian Bistro",
            about: "Petaling Jaya,Selangor",
            text: "Experience healthysustainable living with our delicious and affordable meat-free meals. Select any from our menu: BENTO SET Se..",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/5/518-3788-l.jpg",
            title: "Yishensu@The Curve",
            about: "Petaling Jaya,Selangor",
            text: "Yishensu offers a wide range of delicious oriental dishes, from traditional favorites to creative fusion delights. Enjoy discount..",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/5/529-2478-l.jpg",
            title: "Croutons Cafe",
            about: "Seri Kembangan, Selangor",
            text: "Croutons brings you a sumptuous variety of international cuisines. Indulge in any of the meat-free items from our menu below: • ..",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/6/665-4120-l.jpg",
            title: "The Link Cafe",
            about: "Kuala Lumpur, Wilayah Persekutuan",
            text: "Let us strengthen the connection between your body and soul through our deliciously-crafted meals, while nourishing the connection..",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/4/467-2796-l.jpg",
            title: "PCLO Cafe",
            about: "Kuala Lumpur, Wilayah Persekutuan",
            text: "Think of Churros, think of PCLO Cafe! Each batch of eggless Churros is made with passion and from scratch in our kitchen. Which ..",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/7/703-4854-l.jpg",
            title: "VietBeans Cafe",
            about: "Tanjong Sepat, Selangor",
            text: "Feast on authentic, delicious homecooked Vietnamese cuisine within a cozy environment. Don't miss out on our aromatic coffees, bre..",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/7/753-5830-l.jpg",
            title: "Wonderfuk Veggie",
            about: " Klang, Selangor",
            text: "Savor the flavors of our wonderfully delectable Oriental cuisine in a warm and inviting atmosphere, perfect for gatherings with lo..",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/5/591-3151-l.jpg",
            title: "Vegipai Cafe",
            about: "Taman Desa, Off Jln. Kelang La.., Kuala Lumpur",
            text: "Indulge in a healthy and tasty variety of Oriental and Western delicacies, prepared with quality ingredients! Enjoy any items fro.",
        },
        {
            imgsrc: "https://www.kindmeal.my/photos/deal/7/716-5042-l.jpg",
            title: "Lolla Paluza",
            about: " Petaling Jaya, Selangor",
            text: "Chill out at our cozy hangout and indulge in our refreshing desserts and sweet treats! Enjoy any items from our menu: WAFFLE - O..",
        }
    ]
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", }} class="container">
                {Sdata.map((data) =>
                    <Card style={{ marginLeft: "3rem", width: "35rem", height: "65", marginBottom: "2rem", marginTop: "1rem", boxShadow: "0 0 0.5rem gray" }}>
                        <CardBody style={{ height: "50rem", paddingBottom: "0.1rem" }}>
                            <Image
                                src={data.imgsrc}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <p style={{ fontSize: "1.5rem", }}>
                                    "<b>{data.title} </b>-{data.about}
                                </p>
                                <Text>
                                    {data.text}
                                </Text>
                                <Text color='white' fontSize='2xl'>
                                    <button style={{
                                        border: "1px solid red", backgroundColor: "red", textAlign: "center",
                                        display: "flex",
                                        justifyContent: "left",
                                        borderRadius: "0.2rem",
                                        paddingLeft: "1rem",
                                        paddingRight: "1rem"
                                    }}><b>Get FREE Coupon</b></button>
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter style={{ height: "4rem", paddingTop: "0.1rem" }}>
                            <div style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                                <button style={{
                                    height: "2rem",
                                    width: "2rem",
                                    border: "0.1rem solid gray",
                                    boxShadow: "0 0 0.1",

                                }}>
                                    <img src="data:image/jpeg;base64,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" />
                                </button>
                                <button style={{
                                    height: "2rem",
                                    width: "2rem",
                                    border: "0.1rem solid gray",
                                    boxShadow: "0 0 0.1"
                                }}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4MI3Wst42RIixPqrP0u6jLZGriS_UjpVOw&s" />
                                </button>
                                <button style={{
                                    height: "2rem",
                                    width: "2rem",
                                    border: "0.1rem solid gray",
                                    boxShadow: "0 0 0.1"
                                }}>
                                    <img src="data:image/png;base64,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" />
                                </button>
                            </div>
                            <div style={{ paddingLeft: "2.5rem", paddingRight: "1rem" }}>
                                <div style={{ fontSize: "1rem" }}>
                                    <b>KindMeal Discount</b>
                                </div>
                                <p style={{ fontSize: "1rem", color: "red" }}><b>20% Off</b></p>
                            </div>
                            <div style={{ paddingLeft: "2.5rem", paddingRight: "1rem" }}>
                                <div style={{ fontSize: "1rem" }}><b>Expiring Soon</b></div>
                                <p style={{ fontSize: "1rem", color: "red" }}><b>1 day</b></p>
                            </div>
                        </CardFooter>
                    </Card>
                )}
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <button class="page-link" >prev</button>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <button class="page-link">next</button>
                    </li>
                </ul>
            </nav>

        </>
    );
}
export default KindFood


