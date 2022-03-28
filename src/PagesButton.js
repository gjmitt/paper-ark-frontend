import React from 'react'

function PagesButton() {

  function handlePagesClick(e) {
    console.log("Pages button click")
  }

  return (
    <button onClick={handlePagesClick}>Pages</button>
  )
}

export default PagesButton