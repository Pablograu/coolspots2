import React from "react";
import headerStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <a href="/">
          <img
            src="/coolspots.svg"
            alt="Coolspots Logo"
            className={headerStyles.logo}
          />
        </a>
      </h1>
    </div>
  );
}
{
  /*import headerStyles from '../styles/Header.module.css'
const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>TheWebDev</span> News
            </h1>
            <p className={headerStyles.description}>
                Keep up to date with the latest web-development news
            </p>
        </div>
    )
}
export default Header
*/
}
