

const Header = () => {
    return (
        <div className={headerStyles.header}>
           <h1>
        <a href="/">
          <img
            src="/coolspots.svg"
            alt="Coolspots Logo"
            className={headerStyles.logo}
          />
        </a>
        
      </h1>
      The first ever OaaS, office as a service☕️ 👩🏻‍💻
      Coffeeshops, co-working spaces, your fellow remoters... in one place! Join Coolspots to get access to different locations all around the world. Working remotely doesn't mean isolation!
        </div>
    )
}
export default Header

