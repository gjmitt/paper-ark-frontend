import React from 'react'

function PagesButton({ hasPages, onButtonClick }) {

  function handlePagesClick(e) {
    onButtonClick();
  }

  return (
    <button disabled={!hasPages} onClick={handlePagesClick}>Pages</button>
  )
}

export default PagesButton