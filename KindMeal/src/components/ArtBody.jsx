import React, { useEffect, useState } from "react";

function ArtBody() {
  
  const [Adata, setAdata] = useState([]);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(0);
  const [first, setFirst] = useState(0);

  async function getData() {
    let res = await fetch(
      `http://localhost:7000/articlelist?_page=${page}&_per_page=10`
    );
    let fetchedData = await res.json();
    setAdata(fetchedData.data);
    setLast(fetchedData.last);
    setFirst(fetchedData.first);
  }
  useEffect(() => {
    getData();
  }, [page, last]);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {Adata.map((value) => (
            <div
              style={{
                boxShadow: "0 0 0.3rem gray",
                width: "70rem",
                height: "20rem",
                margin: "2rem",
                display: "flex",
                flexDirection: "row",
                borderRadius: "0.6rem",
              }}
            >
              <div
                style={{
                  height: "20rem",
                  width: "30rem",
                  borderRadius: "0.6rem 0 0 0.6rem",
                }}
              >
                <img
                  style={{
                    height: "20rem",
                    width: "30rem",
                    borderRadius: "0.6rem 0 0 0.6rem",
                  }}
                  src={value.imgscr}
                />
              </div>
              <div style={{ padding: "1.5rem 3rem" }}>
                <p style={{ fontSize: "1.8rem" }}>
                  <b>{value.title}</b>
                </p>
                <p style={{ fontSize: "1.2rem" }}>{value.add}</p>
                <p style={{ fontSize: "1.2rem", marginTop: "2.5rem" }}>
                  {value.text}{" "}
                </p>
                <button
                className="red-btn"
                  style={{
                    backgroundColor: "#f53838",
                    width: "12rem",
                    height: "2.5rem",
                    color: "#FFFFFF",
                    borderRadius: "0.3rem",
                    border: "none",
                    fontSize: "1.3rem",
                    margin: "1.5rem 0",
                  }}
                >
                  <b>View Video</b>
                </button>
                <span style={{ float: "right", margin: "1.5rem 0" }}>
                  {value.date}
                </span>
              </div>
            </div>
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
export default ArtBody;
