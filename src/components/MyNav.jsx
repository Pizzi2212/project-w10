import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
import logo from '../barra.png'
import { Link } from 'react-router-dom'

function MyNav() {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()

  const api_key =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDBkNDhhZDEyOTAwMTU4NzZiYjMiLCJpYXQiOjE3MzQwODU5MDIsImV4cCI6MTczNTI5NTUwMn0.f8Z4j0O0AuiEctE0icSKgHW8_Xdm1fP7kLXYr1YvglA'

  const searcher = () => {
    if (!query) {
      alert('Inserisci una parola chiave per cercare!')
      return
    }

    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
      {
        headers: {
          Authorization: api_key,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nella risposta API')
        }
        return response.json()
      })
      .then((data) => {
        setSearchResults(data.data)

        navigate('/search', { state: { query, searchResults: data.data } })
      })
      .catch((error) => console.error('Errore nella ricerca:', error))
  }

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#2C2C2C' }}>
        <Container fluid>
          <Navbar.Brand className="text-light" href="#">
            Apple Music
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width="60px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Navbar.Brand className="text-light" as={Link} to="/">
                Home
              </Navbar.Brand>
              <Navbar.Brand className="text-light" as={Link} to="/favorites">
                Preferiti
              </Navbar.Brand>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Cerca una canzone"
                className="me-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="outline-danger" onClick={searcher}>
                Cerca
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNav
