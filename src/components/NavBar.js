import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar({ setSelectedMaterial }) {

  function handleNavClick(route) {
    console.log("Nav Clicked route ", route)
  }

  function handleMaterialClick(material) {
    setSelectedMaterial(material);
  }

  return (
    <div>
      <NavLink to="/" exact className="nav-link" activeClassName="active-nav-link">Home</NavLink>
      <NavLink to="/about" exact >About</NavLink>
      <NavLink to="/paper" exact >All</NavLink>
      <NavLink to="/paper/map" exact >Maps</NavLink>
      <NavLink to="/paper/book" exact >Books</NavLink>
      <NavLink to="/paper/event" exact >Events</NavLink>
      <NavLink to="/new" exact >New</NavLink>

    </div>
  )
}

export default NavBar


