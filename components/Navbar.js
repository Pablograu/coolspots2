import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import headerStyles from "../styles/Header.module.css";

const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <a href="/">
          <img
            src="/coolspots-mini.svg"
            alt="Coolspots Logo"
            className={headerStyles.logo}
          />
        </a>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/howitworks">How it works</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
