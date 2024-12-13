import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import Songs from './Songs'
import Player from './Player'
import LeftBar from './LeftBar'
import { useLocation } from 'react-router-dom'
import MyFooter from './MyFooter'

const MainComponent = () => {
  const [tracks, setTracks] = useState([])
  const location = useLocation()
  const { query, tracks: searchTracks } = location.state || {}

  useEffect(() => {
    if (!searchTracks) {
      const api_key =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDBkNDhhZDEyOTAwMTU4NzZiYjMiLCJpYXQiOjE3MzQwODU5MDIsImV4cCI6MTczNTI5NTUwMn0.f8Z4j0O0AuiEctE0icSKgHW8_Xdm1fP7kLXYr1YvglA'
      const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=blackpink`
      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: api_key,
        },
      })
        .then((response) => response.json())
        .then((data) => setTracks(data.data))
        .catch((error) => console.error('Errore:', error))
    } else {
      setTracks(searchTracks)
    }
  }, [searchTracks])

  return (
    <div style={{ backgroundColor: '#1F1F1F', height: '100vh' }}>
      <LeftBar />
      <h1 className="text-light ms-5">Novità</h1>
      <hr className="text-light" />
      <div className="d-flex justify-content-around mt-5">
        <div>
          <h6 className="text-secondary">NUOVA STAZIONE RADIO</h6>
          <p className="text-secondary">
            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
          </p>
        </div>
        <div>
          <h6 className="text-secondary">NUOVA STAZIONE RADIO</h6>
          <p className="text-secondary">
            Ecco la nuova casa della musica latina
          </p>
        </div>
      </div>

      <Carousel interval={3000}>
        {tracks.map((track, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <img
                className="d-block mx-2"
                src={track.album.cover_big}
                alt={`track-${index}`}
                style={{ width: '50%', height: '450px' }}
              />
              {tracks[index + 1] && (
                <img
                  className="d-block mx-2"
                  src={tracks[index + 1]?.album.cover_big}
                  alt={`track-${index + 1}`}
                  style={{ width: '50%', height: '450px' }}
                />
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Songs />
      <Player />
      <div className="pt-1" style={{ backgroundColor: '#323232' }}>
        <MyFooter />
      </div>
    </div>
  )
}

export default MainComponent
