// import { NavLink } from "react-router-dom"
import "./NavBar.style.css"
import { FaToriiGate } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";

export const NavBar = () => {
  return (
    <div className="nav-container">
        <div className="nav-links-container">
            <h1 className="nav-icon">
                <MdOutlineSubject />
            </h1>
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
        </div>
        <div className="logo-containcer">
            <h1 className="nav-icon">
                <FaToriiGate />
            </h1>
        </div>
    </div>
  )
}
