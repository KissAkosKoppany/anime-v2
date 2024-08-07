import { Routes, Route } from "react-router-dom"
import Home from "./Routes/Home"
import Search from "./Routes/Search"
import Watch from "./Routes/Watch"
import News from "./Routes/News"
import TopLists from "./Routes/TopLists"
import NavBar from "./Components/Navigation/NavBar"
import NavigationModal from "./Components/Navigation/Modal/NavigationModal"

function App() {

  return (
    <>
      <NavBar />
      <NavigationModal />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/top-lists' element={<TopLists />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </>
  )
}

export default App
