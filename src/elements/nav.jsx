function Nav() {
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
        <a href="/cart">Konto</a>
        <a href="/koszyk">Koszyk</a>
      </div>
    </nav>
  );
}

export default Nav;
