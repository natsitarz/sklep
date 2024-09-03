import React from "react";
import ReactDOM from "react-dom/client";
import "./elements/elements.css";
import Footer from "./elements/footer.jsx";
import "./elements/kontakt.css";
import Kontakt from "./elements/kontakt.jsx";
import Nav from "./elements/nav.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Kontakt />
    <Footer />
  </React.StrictMode>
);
