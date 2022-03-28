import React from 'react'

function NavBar() {

  function handleNavClick(route) {
    console.log("Nav Clicked route ", route)
  }

  function handleMaterialClick(material) {
    console.log("Material click ", material)
  }

  return (
    <div>
      <span>
        <button onClick={() => handleNavClick('home')}>Home</button>
      </span>
      <span>
        <button onClick={() => handleNavClick('about')}>About</button>
      </span>
      <span>
        <button onClick={() => handleMaterialClick('Book')}>Books</button>
      </span>
      <span>
        <button onClick={() => handleMaterialClick('Map')}>Maps</button>
      </span>
      <span>
        <button onClick={() => handleMaterialClick('Event')}>Events</button>
      </span>
      <span>
        <button onClick={() => handleNavClick('new')}>New</button>
      </span>

    </div>
  )
}

export default NavBar