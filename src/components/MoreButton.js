import React from 'react'

function MoreButton({ isbn }) {

  function handlePagesClick(e) {
    console.log("Pages button click")
  }

  return (
    <button disabled={isbn===""} onClick={handlePagesClick}>More</button>
  )

}

export default MoreButton