import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { updateCount } from "./nav";

const supabase = createClient(
  "https://imqmogizdolnkixppplj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltcW1vZ2l6ZG9sbmtpeHBwcGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2MDA1MDcsImV4cCI6MjAzNzE3NjUwN30.vDy7F4pjVIK6TiQKZkn84RQqR5-jXYBeAdvuiJbQSw4"
);

function Products() {
  const [oferta, setOferta] = useState([]);

  useEffect(() => {
    getOferta();
  }, []);

  async function getOferta() {
    const { data } = await supabase
      .from("oferta")
      .select()
      .order("id", { ascending: true });
    setOferta(data);
  }

  function photoChange(e) {
    const photo = e.target.name + " " + e.target.value + ".png";
    const img = document.getElementById(e.target.name);
    img.src = photo;
  }

  function addToCart(e) {
    const productName = e.currentTarget
      .closest(".productCard")
      .querySelector(".productName").textContent;
    console.log(productName);
    const productPrice =
      e.target.parentElement.parentElement.children[0].children[1].innerText;
    console.log(productPrice);
    const productColor =
      e.target.parentElement.parentElement.children[2].children[0].value;
    console.log(productColor);
    const productQuantityValue =
      e.target.parentElement.children[0].children[0].value;
    console.log(productQuantityValue);
    const product = {
      name: productName,
      price: productPrice,
      color: productColor,
      quantityValue: productQuantityValue,
    };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produkt dodany do koszyka");
    updateCount();
  }

  return (
    <div className="productList">
      <div className="productTop">
        <h1>Oferta sprzedaży</h1>
        <p>
          W naszej ofercie znajdują się bardzo popularne produkty które są
          bardzo dobrze wykonane. Bardzo dobra cena w stosunku do ich jakości.
        </p>
      </div>
      <main className="productBottom">
        {oferta.map((oferta) => (
          <div className="productCard" key={oferta.nazwa}>
            <div className="productInfo">
              <div className="infoTop">
                <p className="productName">{oferta.nazwa}</p>
                <span>{oferta.firma}</span>
              </div>
              <img
                className="productPhoto"
                src={oferta.nazwa + " " + oferta.default_color + ".png"}
                alt={oferta.nazwa}
                id={oferta.nazwa}
              />
              <div className="infoBottom">
                <div className="price">
                  <p>Cena: </p>
                  <p className="productPrice">
                    <b>{oferta.cena.toFixed(2).replace(".", ",")}</b>
                  </p>
                  <p>
                    <b>zł</b>
                  </p>
                </div>
                <p className="productQuantity">
                  Dostępne: <b>{oferta.ilosc} szt.</b>
                </p>
                <p>
                  Kolor:{" "}
                  <select
                    name={oferta.nazwa}
                    onChange={(e) => photoChange(e)}
                    id="color"
                  >
                    {Array.isArray(oferta.color) &&
                      oferta.color.map((ofertaItem, index) => (
                        <option key={index}>{ofertaItem}</option>
                      ))}
                  </select>
                </p>
                <div className="flex-row productButtons">
                  <p>
                    szt.{" "}
                    <select>
                      {Array.from(
                        { length: oferta.ilosc },
                        (_, i) => i + 1
                      ).map((quantity) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      ))}
                    </select>
                  </p>
                  <button className="cartButton" onClick={(e) => addToCart(e)}>
                    Dodaj do koszyka
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Products;
