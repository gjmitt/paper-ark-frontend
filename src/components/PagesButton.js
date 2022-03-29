import React from 'react'

function PagesButton({ hasPages }) {

  function handlePagesClick(e) {
    console.log("Pages button click")
  }

  return (
    <button disabled={!hasPages} onClick={handlePagesClick}>Pages</button>
  )
}

export default PagesButton