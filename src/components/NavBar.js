import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar({ setMaterial, showNewLink }) {

  return (
    <div>
      <NavLink to="/" exact className="nav-link" activeClassName="active-nav-link">Home</NavLink>
      <NavLink to="/about" exact >About</NavLink>
      <NavLink to="/paper/map" exact onClick={() => setMaterial("map")}>Maps</NavLink>
      <NavLink to="/paper/book" exact onClick={() => setMaterial("book")}>Books</NavLink>
      <NavLink to="/paper/event" exact onClick={() => setMaterial("event")}>Events</NavLink>
      {showNewLink
        ? <NavLink to="/new" exact >New</NavLink>
        : null
      }
    </div>
  )
}

export default NavBar


