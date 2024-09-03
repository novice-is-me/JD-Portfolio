import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'

const NavComponent = () => {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="/" className=' font-Inter font-bold text-[40px] text-blue'>Portfolio.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className=' font-Inter font-medium text-blue text-[16px]'>Home</Nav.Link>
          <Nav.Link href="/education" className=' font-Inter font-medium text-blue text-[16px]'>Education</Nav.Link>
          <Nav.Link href="/experiences" className=' font-Inter font-medium text-blue text-[16px]'>Experiences</Nav.Link>
          <Nav.Link href="/skills" className=' font-Inter font-medium text-blue text-[16px]'>Skills</Nav.Link>
          <Nav.Link href="/contact" className=' font-Inter font-medium text-blue text-[16px]'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavComponent
