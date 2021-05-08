import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import headerStyles from "../styles/Header.module.css";
import { Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <a href="/">
          <img
            src="/coolspots.svg"
            alt="Coolspots Logo"
            height="32px"
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
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>
      <Link href="/signin"><Button variant="contained">Login</Button></Link>
      
    </nav>
  );
};
export default Navbar;
