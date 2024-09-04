function Koszyk() {
  // Retrieve items from localStorage
  const items = JSON.parse(localStorage.getItem("cart")) || [];

  // Remove item from cart
  function delCartItem(index) {
    const updatedItems = items.filter((item, i) => i !== index);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    window.location.reload();
  }

  return (
    <main>
      <div className="cartTitle">
        <h1>Koszyk</h1>
        <p>
          W koszyku znajdują się produkty które wybrałeś do zakupu. Możesz je
          usunąć lub przejść do kasy.
        </p>
      </div>
      <div className="cartContent">
        <div className="productsCart">
          {items.length === 0 && <p>Brak produktów w koszyku!</p>}
          {items.map((item, index) => (
            <div className="cartItem" key={index}>
              <div className="cartItemInfo">
                <img
                  src={item.name + " " + item.color + ".png"}
                  alt={item.name}
                  className="cartItemPhoto"
                />
                <p className="cartItemName">
                  <b>{item.name}</b>
                </p>
                <p className="cartItemColor">
                  Kolor: <b>{item.color}</b>
                </p>
                <p className="cartItemQuantity">
                  Ilość: <b>{item.quantityValue}</b>
                </p>
                <p className="cartItemPrice">
                  Cena:{" "}
                  <b>{item.price.replace(",", ".") * item.quantityValue} zł</b>
                </p>
              </div>
              <button onClick={() => delCartItem(index)}>Usuń</button>
            </div>
          ))}
        </div>
        <div className="cartSummary">
          <h2>Podsumowanie</h2>
          <div>
            <p className="cashSummary">
              Wartość zamówienia:{" "}
              <b>
                {items
                  .reduce(
                    (acc, item) =>
                      acc + item.price.replace(",", ".") * item.quantityValue,
                    0
                  )
                  .toFixed(2)
                  .replace(".", ",")}{" "}
                zł
              </b>
            </p>
            <p>
              + Dostawa: <b>14,99 zł</b>
            </p>
          </div>
          <button className="cartButton">Przejdź do kasy</button>
        </div>
      </div>
    </main>
  );
}

export default Koszyk;
