import React from "react";
import ReactDOM from "react-dom/client";
import "./elements/elements.css";
import Footer from "./elements/footer.jsx";
import "./elements/koszyk.css";
import Koszyk from "./elements/koszyk.jsx";
import Nav from "./elements/nav.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Koszyk />
    <Footer />
  </React.StrictMode>
);
