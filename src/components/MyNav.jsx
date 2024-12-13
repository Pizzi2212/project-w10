import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../barra.png'

function MyNav({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    // Passa la query alla funzione di ricerca nel componente padre (StaticComponent)
    onSearch(query)
  }

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#2C2C2C' }}>
      <Container fluid>
        <Navbar.Brand className="text-light" href="#">
          Apple Music
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={logo} width="60px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="text-light" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              Link
            </Nav.Link>
            <Nav.Link className="text-light" href="#">
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-danger" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
