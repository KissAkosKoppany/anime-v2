import { MdSearch } from "react-icons/md";

export const SearchField = () => {
  return (
    <div className="nav-icon searchbar">
        <MdSearch />
        <input type="text" placeholder="Search..." />
    </div>
  )
}
