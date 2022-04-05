import React from 'react'

function PageControls({ pageNum, pageCount, onNextClick, onPrevClick, onCloseClick }) {

  return (
    <>
      <button disabled={pageNum === 0} onClick={onPrevClick}>Prev</button>
      <button disabled={pageNum === pageCount} onClick={onNextClick}>Next</button>
      <button onClick={onCloseClick}>Close</button>
    </>
  )
}

export default PageControls