import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNav from './components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainComponent from './components/MainComponent'
import Search from './components/Search'
import Favorites from './components/Favorites'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <Router>
      <div>
        <header>
          <MyNav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
