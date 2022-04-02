import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar({ setMaterial, showNewLink }) {

  return (
    <div>
      <NavLink to="/" exact className="nav-link" activeClassName="active-nav-link">Home</NavLink>
      <NavLink to="/about" exact className="nav-link">About</NavLink>
      <NavLink to="/paper/map" exact className="nav-link" onClick={() => setMaterial("Map")}>Maps</NavLink>
      <NavLink to="/paper/book" exact className="nav-link" onClick={() => setMaterial("Book")}>Books</NavLink>
      <NavLink to="/paper/event" exact className="nav-link" onClick={() => setMaterial("Event")}>Events</NavLink>
      {showNewLink
        ? <NavLink to="/new" exact className="nav-link" >New</NavLink>
        : null
      }
    </div>
  )
}

export default NavBar


