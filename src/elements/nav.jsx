function Nav() {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  const itemCount = items.length;

  return (
    <nav>
      <div>
        <img className="logo" src="./logo-clear-bg.png" alt="logo" />
        <p className="name">Sklep Firmowy Zniczy</p>
        <a href="/">Strona główna</a>
        <a href="/produkty">Produkty</a>
        <a href="/kontakt">Kontakt</a>
      </div>
      <div>
        <a href="/konto">Konto</a>
        <a href="/koszyk">Koszyk ({itemCount})</a>
      </div>
    </nav>
  );
}

export function updateCount() {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  const itemCount = items.length;
  document.querySelector(
    "nav a[href='/koszyk']"
  ).textContent = `Koszyk (${itemCount})`;
  return itemCount;
}

export default Nav;
