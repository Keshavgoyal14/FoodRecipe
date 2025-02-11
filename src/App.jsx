
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/home'
import Favorites from './pages/favorites'
import Details from './pages/details/details'

function App() {
  

  return (
    <div className="bg-yellow-50 "> 
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'
        element={<Home/>}/>
        <Route  path='/favorites'
        element={<Favorites/>}/>
        <Route  path='/recipe-item/:id'
        element={<Details/>}/>
      </Routes>

    </div>

    </div>
  )
}

export default App
