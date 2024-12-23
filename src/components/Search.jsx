import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToFavorites } from '../redux/trackSlice'
import { CiPlay1 } from 'react-icons/ci'

const Search = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { query, searchResults } = location.state || {}

  const [currentTrack, setCurrentTrack] = useState(null)

  const handleAddToFavorites = (track) => {
    dispatch(addToFavorites(track))
  }

  const handlePlayAudio = (track) => {
    setCurrentTrack(track)
  }

  return (
    <div
      style={{
        backgroundColor: '#1F1F1F',
        color: 'white',
        padding: '10px',
        minHeight: '100vh',
      }}
    >
      <h4>Risultati per: "{query}"</h4>
      {searchResults && searchResults.length > 0 ? (
        <ListGroup>
          {searchResults.map((track) => (
            <ListGroup.Item
              key={track.id}
              style={{
                backgroundColor: '#2C2C2C',
                color: 'white',
                marginBottom: '5px',
              }}
            >
              <img
                src={track.album.cover_small || 'default-image.jpg'}
                alt={track.title}
                style={{ width: '50px', height: '50px' }}
              />{' '}
              <strong>{track.title}</strong> - {track.artist.name}
              <FaHeart
                className="ms-3"
                onClick={() => handleAddToFavorites(track)}
                style={{ cursor: 'pointer', color: 'red' }}
              />
              <CiPlay1
                onClick={() => handlePlayAudio(track)}
                style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>Non sono stati trovati risultati per la ricerca.</p>
      )}

      {currentTrack && (
        <div
          className="fixed-bottom bg-danger p-4 d-flex justify-content-center align-items-center"
          style={{ marginTop: '20px' }}
        >
          <h2>
            {currentTrack.title} - {currentTrack.artist.name}
          </h2>
        </div>
      )}
    </div>
  )
}

export default Search
