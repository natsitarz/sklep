import React from "react";
import ReactDOM from "react-dom/client";
import "./elements/elements.css";
import Footer from "./elements/footer.jsx";
import "./elements/homepage.css";
import Homepage from "./elements/homepage.jsx";
import Nav from "./elements/nav.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Homepage />
    <Footer />
  </React.StrictMode>
);
