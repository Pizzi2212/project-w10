import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromFavorites } from '../redux/trackSlice'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useState } from 'react'
import { CiPlay1 } from 'react-icons/ci'

const Favorites = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.tracks.favorites)

  const handleRemoveFromFavorites = (track) => {
    dispatch(removeFromFavorites(track))
  }
  const [currentTrack, setCurrentTrack] = useState(null)
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
      <h4>I tuoi preferiti</h4>
      {favorites.length > 0 ? (
        <ListGroup>
          {favorites.map((track) => (
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
              <FaRegTrashAlt
                onClick={() => handleRemoveFromFavorites(track)}
                style={{ marginLeft: '10px', cursor: 'pointer' }}
              />
              <CiPlay1
                onClick={() => handlePlayAudio(track)}
                style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>Non hai ancora aggiunto brani ai preferiti.</p>
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

export default Favorites
