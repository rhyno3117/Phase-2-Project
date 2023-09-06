import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import RYME from './RYME'
import MyHome from './MyHome'
import FAM from './FAM'
import FavFoods from './FavFoods'
import FavSports from './FavSports'
import Goals from './Goals'
import MainHome from './MainHome'
import '../CSS/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path={"/"} element={<Link to={"/RYME"} id="starterLogo" className="centered-container" >🦏</Link>} />
        <Route path={"/RYME/*"} element={<MainHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
