import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

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

  function photoChange() {
    const list = document.querySelectorAll("#color").forEach((item) => {
      item.addEventListener("change", changePhoto);
    });
    function changePhoto(e) {
      const photo = e.target.name + " " + e.target.value + ".png";
      const img = document.getElementById(e.target.name);
      img.src = photo;
    }
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
            <img
              className="productPhoto"
              src={oferta.nazwa + " " + oferta.default_color + ".png"}
              alt={oferta.nazwa}
              id={oferta.nazwa}
            />
            <div className="productInfo">
              <div className="infoTop">
                <p className="productName">{oferta.nazwa}</p>
              </div>
              <div className="infoBottom">
                <p className="productPrice">
                  Cena: <b>{oferta.cena + "zł"}</b>
                </p>
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
