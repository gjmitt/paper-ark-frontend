import React from 'react'

function MoreButton() {

  function handleMoreClick(e) {
    console.log("More button click")
  }

  return (
    <button onClick={handleMoreClick}>More</button>
  )
}

export default MoreButton