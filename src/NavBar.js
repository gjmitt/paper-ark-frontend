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
        <button onClick={() => handleMaterialClick('Books')}>Books</button>
      </span>
      <span>
        <button onClick={() => handleMaterialClick('Mapes')}>Maps</button>
      </span>
      <span>
        <button onClick={() => handleMaterialClick('Events')}>Events</button>
      </span>
      <span>
        <button onClick={() => handleNavClick('new')}>New</button>
      </span>

    </div>
  )
}

export default NavBar