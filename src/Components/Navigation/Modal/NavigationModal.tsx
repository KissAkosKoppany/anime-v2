import { NavLink } from "react-router-dom"
import "./NavigationModal.style.css"

const NavigationModal = () => {
  return (
    <div className="nav-modal-container">
        <NavLink to="/">
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
        </NavLink>
    </div>
  )
}

export default NavigationModal
