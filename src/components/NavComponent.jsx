import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavComponent = () => {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="/" className=' font-Inter font-bold text-[40px] text-blue'>Portfolio.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto gap-4 text-center">
          <Nav.Item>
              <NavLink  to="/" className={({ isActive }) =>
              `font-Inter font-medium p-2 rounded-[15px] ${isActive ? 'text-white bg-blue' : 'text-blue text-[16px]'}`}>Home
              </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink  to="/education" className={({ isActive }) =>
              `font-Inter font-medium p-2 rounded-[15px] ${isActive ? 'text-white bg-blue' : 'text-blue text-[16px]'}`}>Education
              </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink  to="/experiences" className={({ isActive }) =>
              `font-Inter font-medium p-2 rounded-[15px] ${isActive ? 'text-white bg-blue' : 'text-blue text-[16px]'}`}>Experiences
              </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink  to="/skills" className={({ isActive }) =>
              `font-Inter font-medium p-2 rounded-[15px] ${isActive ? 'text-white bg-blue' : 'text-blue text-[16px]'}`}>Skills
              </NavLink>
          </Nav.Item>
          <Nav.Item>
              <NavLink  to="/contact" className={({ isActive }) =>
              `font-Inter font-medium p-2 rounded-[15px] ${isActive ? 'text-white bg-blue' : 'text-blue text-[16px]'}`}>Contact
              </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavComponent
