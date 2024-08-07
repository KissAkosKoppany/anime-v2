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
            <div className="logo-container">
                <h1 className="nav-icon">
                    Logo
                    <p><GiFluffyCloud /></p>
                    Logo
                </h1>
            </div>
        </div>
        <SearchField />
    </div>
  )
}

export default NavBar;