import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  Text,
  Divider,
  Stack,
} from "@chakra-ui/react";

function KindFood() {
  const [Sdata, setSdata] = useState([]);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(0);
  const [first, setFirst] = useState(0);

  async function getData() {
    let res = await fetch(
      `http://localhost:7000/mealdata?_page=${page}&_per_page=10`
    );
    let fetchedData = await res.json();
    setSdata(fetchedData.data);
    setLast(fetchedData.last);
    setFirst(fetchedData.first);
  }
  useEffect(() => {
    getData();
  }, [page, last]);

  
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {Sdata.map((data) => (
            <Card
              style={{
                margin: "1.7rem 2rem",
                width: "35rem",
                height: "65",
                boxShadow: "0 0 .3rem gray",
              }}
            >
              <CardBody style={{ height: "50rem", paddingBottom: "0.1rem" }}>
                <Image src={data.imgsrc} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <p style={{ fontSize: "1.5rem" }}>
                    <b>{data.title} </b>-{data.about}
                  </p>
                  <Text>{data.text}</Text>
                  <Text color="white" fontSize="2xl">
                    <button
                    className="red-btn"
                      style={{
                        border: "1px solid red",
                        backgroundColor: "#f53838",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "left",
                        borderRadius: "0.5rem",
                        padding: " .2rem 1rem",
                      }}
                    >
                      <b>Get FREE Coupon</b>
                    </button>
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter style={{ height: "4rem", paddingTop: "0.1rem" }}>
                <div>
                  <button
                    style={{
                      height: "2.2rem",
                      width: "2.4rem",
                      margin: "auto .3rem",
                      borderRadius: ".5rem",
                    }}
                  >
                    <img
                      style={{
                        height: "2.2rem",
                        width: "2.4rem",
                        borderRadius: ".5rem",
                      }}
                      src="data:image/jpeg;base64,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"
                    />
                  </button>
                  <button
                    style={{
                      height: "2.2rem",
                      width: "2.4rem",
                      margin: "auto .3rem",
                      borderRadius: ".5rem",
                    }}
                  >
                    <img
                      style={{
                        height: "2.2rem",
                        width: "2.4rem",
                        borderRadius: ".5rem",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4MI3Wst42RIixPqrP0u6jLZGriS_UjpVOw&s"
                    />
                  </button>
                  <button
                    style={{
                      height: "2.2rem",
                      width: "2.4rem",
                      margin: "auto .3rem",
                      borderRadius: ".5rem",
                    }}
                  >
                    <img
                      style={{
                        height: "2.2rem",
                        width: "2.4rem",
                        borderRadius: ".5rem",
                      }}
                      src="data:image/png;base64,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"
                    />
                  </button>
                </div>
                <div style={{ paddingLeft: "2.5rem", paddingRight: "1rem" }}>
                  <div style={{ fontSize: "1rem" }}>
                    <b>KindMeal Discount</b>
                  </div>
                  <p style={{ fontSize: "1rem", color: "red" }}>
                    <b>{data.discount}</b>
                  </p>
                </div>
                <div style={{ paddingLeft: "2.5rem", paddingRight: "1rem" }}>
                  <div style={{ fontSize: "1rem" }}>
                    <b>Expiring Soon</b>
                  </div>
                  <p style={{ fontSize: "1rem", color: "red" }}>
                    <b>{data.time}</b>
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item ">
            <button
              disabled={page <= first}
              onClick={() => {
                setPage(page - 1);
              }}
              class="page-link"
            >
              prev
            </button>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              style={
                page === 1
                  ? { backgroundColor: "#40bfed", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              {page - 1 === 0 ? page : page === last ? page - 2 : page - 1}
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              style={
                page === 1
                  ? { backgroundColor: "white", color: "black" }
                  : page === last
                  ? { backgroundColor: "white", color: "black" }
                  : { backgroundColor: "#40bfed", color: "white" }
              }
            >
              {page === 1 ? page + 1 : page === last ? page - 1 : page}
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              style={
                page === last
                  ? { backgroundColor: "#40bfed", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              {page - 1 === 0 ? page + 2 : page === last ? page : page + 1}
            </a>
          </li>
          <li class="page-item">
            <button
              disabled={page >= last}
              onClick={() => {
                setPage(page + 1);
              }}
              class="page-link"
            >
              next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default KindFood;
