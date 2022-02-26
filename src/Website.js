import React from 'react'
import { Nav,Navbar,Form,Container,FormControl,Button} from 'react-bootstrap'


export default function Website() {
  return (
      <>
    <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
  
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/user">User</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
        <Nav.Link href="/Infromation">Information</Nav.Link>
        <Nav.Link href="/notfound"></Nav.Link>

       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    </>
  )
}
