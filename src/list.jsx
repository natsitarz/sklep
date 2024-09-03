import React from "react";
import ReactDOM from "react-dom/client";
import "./elements/elements.css";
import Footer from "./elements/footer.jsx";
import Nav from "./elements/nav.jsx";
import "./elements/products.css";
import Products from "./elements/products.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Products />
    <Footer />
  </React.StrictMode>
);
