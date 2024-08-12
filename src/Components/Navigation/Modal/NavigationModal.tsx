import { NavLink } from "react-router-dom"
import "./NavigationModal.style.css"

const NavigationModal = () => {
  return (
    <div className="nav-modal-container">
        <NavLink className="link" to="/">
            Home
        </NavLink>
        <NavLink className="link" to="search">
            Search
        </NavLink>
        <NavLink className="link" to="top-lists">
            Top Lists
        </NavLink>
        <NavLink className="link" to="watch">
            Watch
        </NavLink>
        <NavLink className="link" to="news">
            News
        </NavLink>
    </div>
  )
}

export default NavigationModal
