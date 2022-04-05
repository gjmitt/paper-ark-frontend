import React from 'react'

function PagesButton({ hasPages, onButtonClick }) {

  return (
    <button disabled={!hasPages} onClick={onButtonClick}>Pages</button>
  )
}

export default PagesButton