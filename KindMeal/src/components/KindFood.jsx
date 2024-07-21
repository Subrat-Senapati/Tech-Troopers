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
                    <Card style={{ marginLeft: "3rem", width: "35rem", marginBottom: "2rem", marginTop: "1rem", boxShadow: "0 0 0.5rem gray" }}>
                        <CardBody>
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
                        <CardFooter>
                            <div>
                                <button style={{
                                    height: "1.5rem",
                                    width: "1.5rem",
                                }}>
                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxUSEhAVFRUXFRUWFRUYFRAVFRcVFRUWFxcSFRYYHSggGB0lHhUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGysfHSUuLi0uLS8tLi0tKy0tListLS0tLS0vLS0tLS0rLy0tLi8tKy03LS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EAEIQAAIBAgIHAwoCBwgDAAAAAAABAgMRBCEFBhIxQVFhcYGREyIyQlJyobHB0aKyFCMzU2KSkxVDdIKj0uLwByVz/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECAwUEBgf/xAAyEQEAAgECAwQJBAIDAAAAAAAAAQIDBBEhMUEFEjJRExQiYZGhsdHwUnGBwULhFSPx/9oADAMBAAIRAxEAPwD0x8u+YEZKEQIAAAAYBsu67hEAAAABO4qoREAFwFwACxYWBsTJMhEAAAAXY2AoiIAAAAAiqBAgAACLCgQIAAAAAAAAAAAAGStnBaPqVn5kG+u6K72Z48OTJ4YbMeG+Tww72E1WW+rUv0jkv5nv8EdDH2dH+c/B78fZ0f5z8HVoaHoQ3Uov3ltfmueuulw15Vj6/V666XDXlWPq240ILdCK7kbopWOUN0UrHKCVCD3wi+5CaVnoTSs9GGWjaL30af8AJH7GE4MU86x8GE4MU/4x8GKWhcO/7qPddfJmE6XD+mGE6XD+lT+wcP8AuvxT+5j6nh/T9U9Tw/p+qP7Aw37r8VT7j1LB+n5ynqeH9PzlD1fw37v8dT7k9SweXzk9Sw+Xzljnq3Qe5SXZJ/W5jOgw+/4sJ0GGfP4tStqtD1asl2qMvlY127Or0tP58Gu3Z1elp/Pg52L1erQV42mum/we/uPNk0OSnGOLzZNFkrxji5DVsjwvEAAAAAAAAAAAAAAAAABF2WICIAAAAABejRlOSjFNye5IyrWbTtWN5ZVrNp2rG8vUaL1bjHzq1pS37Pqrt9r5HVwaCsccnGfLp/t1cGhrHHJxny6O/GKSslZLcuB0IjbhD3xG3JJVAAEJgSAAAAAACtgJSA83rlhIxpfpCVtlryj/AIG0tt+7dX6X5I8Gt00Xr3684+bwa3TxeO/XnHzeZOM44AAAAAAAAAAAAAAALsuwwBEAAAABlw2HlUmoQV2933fQzpS17RWvNlSlr2iteb2+idGQw8bLOT9KXF9FyXQ7un09cNeHPrLu4NPXDXhz82+eh6AAAAq2ASAsAAAAAAAAA5ussFLA4lPc6FVP+nIxvxrLG/hl870RVc8PTk97hG/ala/wPnMkbWmHzuSNrTDbMGAiqIiAAAAAAAAAAASLsuwAIgAAAABVex1Z0d5OntyXnzV+yPBfXw5Ha0WDuU7085+js6LB3Kd6ec/R2j2vaAAAFWwCQFgAAABVsCUwJAAAOFrzifJaNxMudKUF21P1a/Ma8s7UlryztSXhtEw2cPSX8Efir/U+eyTveXz+Sd7S2yMQiBAAAAAAAAAAEWIWIAbhEAAAAwBkra0XhfK1oQe5vP3Vm/grGzBj9JkrVswY/SZIq+go+ifRAAABRsCUgLAAAACrYEICyQEgAAHhP/K+JvRoYZPOtWV/dhv/ABTg+482qv3a/nR5tVfu1c9RS7OBwXCERAAAAALF2XYuNzcIgAAMA2XddwiAAAAAncXkqERHoNT6N6k5+zFJdsn/AMfidHs6m97W8v7dDs6m97W8v7erOu64AAqwCQFgIlJJXbS7TG960je07R71iJnk15Y6mvWv2Js8F+1dLWdu9v8AtEy2RgvPRC0hT5tdzMY7X0s/5bfxP2X1fJ5MsK0Zei0+892LPjyxvS0S12ravOF0bWKUgJAAAIYHzjXOXlNL0o8KWHcu+UpL/b4HN19uGzna63DZQ5TkhAAAAHUqg3NwiAAAAAAAAAAAZkoYoAev1SpWoOXtTfgkl80zs9n12xTPnLs9n12xzPnLuHve4AARYCQNWvibZR38XwX3Zx9f2pGGZpj426+Ufefc3Ux78bOfVrK/tPm/ofM5cuTNbvZJmZ/OUdHqrSdvKGN1mzX3YZxSIY3IyiF4I45bzKLTWd44SvPm3sLpBxynmufFdvM7Oi7XtWYrn4x59Y/fz/Obz5NPE8aupF3V0fSRMWjeOTxJKAACGB851pp20w2/WwkWu6o0/kcrtDnH55uX2h0/PNjOY5gAAAEi7LEFxuSEQAAAAAAAAAAAAABMYttJK7bslzb3IsRMztBETM7Q+haPw3kqUIcln272/G59Hhx+jpFfJ9Hhx+jpFfJsGxsQmBIADWxdW3mre+PJcWcvtTWzgx92nin5R1n7NuOm/GeTl1qnBbj5Lm9tK9Z5saQZpsBFjLdCxiqGgNzRuJ2XsPc93R8u87nZGtmtvQ35Ty90+X8/X93n1GPeO9DrH0rxAAAB4jX6hs4nC1uEvK0JPrKO3Bfgmc/tCu9Il4NfXem7lnHccAALFhYLjc3CIAAAAAAAAAAAAAAAek1Y0U7qtNe4uf8AH9vHkdPQ6ad/SW/j7unodNx9Jb+Pu9OdV1FWwCQFgAHIxNW+1Lm7LsWX38T4jX55zai9unKP2j83e7HTbaGojyt6yQRZIImwENAVaCqSLWZid4ZO9h6u1BS5r48T7nTZfS4q384+fX5uXevdtMLXN7FZASB57X3CupgKkkvOpbNePbSak/GKku805697HMNOevexzDykJqSTW5pNdjzR87ts+e22SAAAAAAAAANMuy7BEAAAAVQiAGbDYadWWzCLk/l1b4Izpjtee7WN5Z0x2vO1Y3em0Zq5GDUqrU37Pqrt9o6uDQVrxvxny6f7dTBoa1434z8v9u+dB0FWASAsAArN2TfQxvPdrMrEby4Mn5sUfn1XTiOMq3M4hZXQliuiItYIqwqjDJSRYV09FP8AV9jf3+p9b2RO+miPKZ+7w6jxt5I6bQkABStTU4uMldSTTXRqzQHynQt40VCT86nKdKXbTk4/JI+czV7t5h87mr3bzDeNTUAAAAAAAFVDRESAAACqEQAyUKTnJQiruTSXeZUrNrRWOcsq1m1orHOXvNG4CNCCjHf60uMnzZ9Bhw1xV7sPoMOGuKvdhtm5tUbAlICwAABEldWJaN4mFidnnL8D4CKzHCXUWRZnZF4mKLoItcIqwqkmGTHIziB1tEwtSXVt/G30PrOya7aaJ85l4dRO926dJpAAAD5dKnsY3GQ5Yhz/AKsVI4mtrtkcTWV2yM1zxzLyTIRAAAAXAbi8l5BEAOfpmUlCOxtXcreapPg9+zKL+NuZvwRHenduwRE2nduUH5sc28lm1ZvLe1wNVuctducsu4ickIiAADtap0dqu5ezBtdraXybPd2fXfLv5Q92grvl38oexO07KrAJAWAAAAENgcPHUtmo+TzXfvPkO08E4dRM9LcY/v5ujgt3qR7mKJzW2VkwxWuETcCGwKNmcKrZtpLe3ZGWOlslorXnJMxEby9BSp7MVFcFY+4xY4x0rSOkbOZad5mVzYgAAq2B800oraWxi5qhL/SSOPr/AB/nucfX+L89yxz3gAAAAA3GShigAA52ml5sck3tZLZnJ+i7yio53Su+Hajfp/FLfp/FLbwcUqUFl6EVk21u4Piuphk8UsMnilmNbWAAAHd1RqWrSXOHya+57+zrbZJj3Pf2fO2SY9z1x2XYRYCQAAABVsCEgMWMwynG3FZp9Tx67SRqcfd6xylsxZO5bdxWmnZqzR8bkx2x2mto2mHSiYmN4SmYIm4C4RDArJmXNYh0tGYS3nyWfBclzPpOytDOOPS3jj0jy97x58u/sw6J23mAAFWwCQHznWRbOmKi9rDU5eEnH6HJ7Q5x+ebldoRxhQ5rmgAAAKoRAAAA5unIbUYLhtXeUHkot+s0vHwe436edrTLfp52tMt+j6K7Fwt8OBptzlptzlciAAABsaOxXkqsZ8nn1Tya8Lm3Dk9HeLNmHJ6O8WfQac1JJp3TV0+afE+iiYmN4fRRMTG8LFUAAAAFbAWQADXxWEjU35Pg/wDu88er0OPUx7XCek/nNsx5bU5OXWwc4cLrms/gfN6jszPi6d6POOPy5vbTNS3ua+0c/ZtNsbGzJSpTn6MW+vDxPTh0ebN4KzPv6fFhbJWvOXRwmjlHOWb5cF9z6DR9lUxTF8ntW+Ufd5MmebcI4Q3zrvOAAKyAJAWA+c64P/3Mf8HG/wDWqHL7Q+39uX2h9v7YjluYAAAAAAAAAObp2m3CLUW7TvlGcmsnZpRlF77cTfp7RFp47N+nna3PZv0IbMIrkkuW5cjTad5mWm07zMrkQAACwsFxJL0OrWl9j9TN5N+Y+TfqvodHRanu/wDXbl0+zoaLU93/AK7cun2eqOs6wAAAAAAAAANgYpQT3pPuTMLY6W8URKxMxyTGjFbopdyMa4cdeVYj+IWbWnqyG1iAAAAAAAAfK9J4r9I0xiJrONKEaKfVNX/EqiORrrbzt+cHI11t52bJznPAAAAAAAAAGlpOaik9mpJ3slCU4/le/lfqbcUbzziG3FG87bxDYwnoRtxSe+Ut+e95swv4pYX8UspixABVgbEkyEQA9BoXWBwtCs7x3KfGPSXNdeHy6el1u3sZPj93S0us29jJ8fu9VGSaundPc/qdV1UNgSmBIAAAAhgVYFkgJAAAAEXAkAAA4WuWsEcDhZVLrykrxpR5za9JrlHe/DijXlv3K7teS/dru+favYN0qN5X25vblffnuT68e1s4Ga/es4Oa/es6ZqagqhEAAAAAAAc/TlS1K3Nr2Mkmm23LJLdnZ70b9PHt7t2nj223hf2cfdXJLdyWXgar+KWu/illMWIirAxJMhEAAADp6H0zOg9l3lT9njHrH7buzO/u0urnH7NuNfo9um1c4/Ztxr9HscNXjVipQknF8fo+T6HYraLRvHJ2a2i0bxyZ0ZKAAAENgVuBZICQAAABVsBECwADj6xayYfA09qrPzmvMpqznPsXBdXkYXyRSOLC+SK83zRSraQxH6XiVaK/ZUs9lR3q1+HG/rPpZHI1Oom07dfo5Gp1E2nb8h2LnheI3F5LyCIAAAAAiqIiAGnpRpQUthScZRsmrvevRV1n9r8Dbhje22+zbhje22+zPhf2cckvNWSzSy3LoYX8UsL+KWVEhILiZJkIgAAAC7GwFZMPiatJ7VKo4S45KUZdJweT+D5NG3DqL4p9n4NuHPfFPs/B06GulWGVfCOa9uhJSv18lOzXc5HSp2hSfFGzpY9fSfFwbtLX3AvKdSdJ8qlKrH47Nviequox25S9NdRjnlLqYTWDCVcqeLoyfJVKe1/Le5nF6zylsi9Z5S6VzNkqBZICQAADzus+uGHwPmyflKtsqUWr57nN7oL48kzVky1p+7XfLWn7vIVNZdKYjzouGGg9yUVKduu2n8ongya6enyeC+t25EcVpFbtJS/o0X3Zmr16/wCf+NPr1/z/AMbVPTuk4bq9Cp79KUfyNGcdoW6x+fJnHaFusMj1t0kv7jCvqnVS8GzZ/wAhHk2f8hHk0sXpvStbLytGgnv8nF7Vu2W0/Bo1218zyYW189HPwug4Rn5SrKVao83Kbbu+dm3d9rZ5L57WeO+e1nVNDSncZKgxQAAAAAqgSZCABzNPRTppuntWfpWpPZzW9zatfddG/Tz7XPZv08+1z2b2E/Zx91cNnh7PDsNV/FLVfxSymLEAAAAEFISFERAAAauBq1tHUZ+lRg/8sb+JlF7R1ZRe0dWOjouNPOjOrR/+dWpFeF7G2uoyV5S211GSvKXSw+lsfS9HFRqr2a1OL/HT2X43PTTtC8c+L0U1945uph9d5xyr4KfvUZRqrt2XsyXxPVTX4558Hqprsc8+Do0Nd8BLJ4hQfGNSNSm1/MkemufHPGJemM1J5StiddtH01d4uD6Q2pvwimWc1I6rOWkdXlNL6+V8VengKUoReTrzte38KzUe3N9Ezy5dXEcuDzZdXFeXBzNF6GjSe3N+Uqt3c5XebzbV+PV5s5mTLN/2czJlm/7Onc0zLTIRAAAAACqEQAAADAIuy7BEAAADXxuEVWNnKUfda4rimmmbMd5pO8M6Xmk7wzU42SXJWyVl3LgYTO87sZned1iIAAAABcu67hEAAAAAAAAAFZwUlZpNdUn8xE7ETswrA0k7+Sp39yH2Mu/bzZd+3m2EuBEgbG5MhEAAAAAAAAAAAARYWAIEAAAA/9k=" />
                                </button>
                                <button style={{
                                    height: "1.5rem",
                                    width: "1.5rem",
                                }}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4MI3Wst42RIixPqrP0u6jLZGriS_UjpVOw&s" />
                                </button>
                                <button style={{
                                    height: "1.5rem",
                                    width: "1.5rem",
                                }}>
                                    <img src="data:image/png;base64,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" />
                                </button>
                            </div>
                            <div><p>KindMeal Discount</p>
                                <p>20% Off</p>
                            </div>
                            <div><p>Expiring Soon</p>
                                <p>1 day</p>
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


