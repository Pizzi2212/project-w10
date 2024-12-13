import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'

const Songs = () => {
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])

  const api_key =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDBkNDhhZDEyOTAwMTU4NzZiYjMiLCJpYXQiOjE3MzQwODU5MDIsImV4cCI6MTczNTI5NTUwMn0.f8Z4j0O0AuiEctE0icSKgHW8_Xdm1fP7kLXYr1YvglA'

  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=rock', {
      headers: { Authorization: api_key },
    })
      .then((response) => response.json())
      .then((data) => setData1(data.data))
      .catch((error) => console.error('Error in Fetch 1:', error))

    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=kpop', {
      headers: { Authorization: api_key },
    })
      .then((response) => response.json())
      .then((data) => setData2(data.data))
      .catch((error) => console.error('Error in Fetch 2:', error))

    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=metal', {
      headers: { Authorization: api_key },
    })
      .then((response) => response.json())
      .then((data) => setData3(data.data))
      .catch((error) => console.error('Error in Fetch 3:', error))
  }, [])

  const renderCarouselItems = (data) => {
    const groupSize = 8
    const groupedTracks = []
    for (let i = 0; i < data.length; i += groupSize) {
      groupedTracks.push(data.slice(i, i + groupSize))
    }

    return groupedTracks.map((group, index) => (
      <Carousel.Item key={index}>
        <div className="d-flex justify-content-around">
          {group.map((trackItem, idx) => (
            <div key={idx} style={{ width: '12.5%' }}>
              {' '}
              <img
                className="d-block mx-2"
                src={trackItem.album.cover_big}
                alt={`track-${index}-${idx}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      </Carousel.Item>
    ))
  }

  return (
    <div style={{ backgroundColor: '#1F1F1F', paddingBottom: '50px' }}>
      <div className="mb-4">
        <h2 className="text-light ms-5">Rock</h2>
        <Carousel interval={3000}>{renderCarouselItems(data1)}</Carousel>
      </div>

      <div className="mb-4">
        <h2 className="text-light ms-5">Kpop</h2>
        <Carousel interval={3000}>{renderCarouselItems(data2)}</Carousel>
      </div>

      <div>
        <h2 className="text-light ms-5">Metal</h2>
        <Carousel interval={3000}>{renderCarouselItems(data3)}</Carousel>
      </div>
    </div>
  )
}

export default Songs
