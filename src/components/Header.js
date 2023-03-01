import logo from '../images/logo-mesto.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo"
        src={logo}
        alt="логотип проекта Место" />
    </header>
  );
}

export default Header;