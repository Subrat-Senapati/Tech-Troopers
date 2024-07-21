import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ChakraProvider>


=======
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> bcd30600aaf657b77bcbf4941bb50f50ccce5e7f
);
