// import { NavLink } from "react-router-dom"
import "./NavBar.style.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { GiFluffyCloud } from "react-icons/gi";
import { SearchField } from "./SearchField";

const NavBar = () => {
  return (
    <div className="nav-container">
        <div className="nav-links-container">
            <button className="nav-icon">
                <GiHamburgerMenu />
            </button>
            {/* <NavLink to="/">
                <h1>Home</h1>
            </NavLink>
            <NavLink to="search">
                <h1>Search</h1>
            </NavLink>
            <NavLink to="top-lists">
                <h1>Top Lists</h1>
            </NavLink>
            <NavLink to="watch">
                <h1>Watch</h1>
            </NavLink>
            <NavLink to="news">
                <h1>News</h1>
            </NavLink> */}
            <div className="logo-container">
                <h1 className="nav-icon">
                    Anime 
                    <p><GiFluffyCloud /></p>
                    Reviews
                </h1>
            </div>
        </div>
        <SearchField />
    </div>
  )
}

export default NavBar;