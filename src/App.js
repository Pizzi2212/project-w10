import React, { useState } from 'react'
import NetflixNavbar from './components/MyNav'
import Footer from './components/MyFooter'
import TVShowsHeader from './components/SubNav'
import FilmCarousel1 from './components/MainComponent1.jsx'
import FilmCarousel2 from './components/MainComponent2.jsx'
import FilmCarousel3 from './components/MainComponent3.jsx'
import EditProfile from './components/Edit.jsx'
import Settings from './components/Settings.jsx'
import './App.css'
import { Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './components/Details.jsx'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <Router>
      <div>
        <header>
          <NetflixNavbar onSearch={handleSearch} />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TVShowsHeader />
                  <FilmCarousel1 searchQuery={searchQuery} />
                  <FilmCarousel2 />
                  <FilmCarousel3 />
                </>
              }
            />
            <Route
              path="/details/:filmId"
              element={
                <Row className="justify-content-center mt-3">
                  <Col xs={12} md={8} lg={6}>
                    <Details />
                  </Col>
                </Row>
              }
            />
            <Route path="/edit" element={<EditProfile />} />
            <Route path="/account" element={<Settings />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App
