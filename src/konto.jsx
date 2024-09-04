import React from "react";
import ReactDOM from "react-dom/client";
import "./elements/elements.css";
import Footer from "./elements/footer.jsx";
import "./elements/konto.css";
import Konto from "./elements/konto.jsx";
import Nav from "./elements/nav.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Konto />
    <Footer />
  </React.StrictMode>
);
