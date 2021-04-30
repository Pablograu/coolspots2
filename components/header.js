import headerStyles from "../styles/Header.module.css";


const Header = () => {
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
    )
}
export default Header

