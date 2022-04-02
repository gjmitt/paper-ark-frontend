import React, { useState } from 'react'

function PageControls({ pageNum, pageCount, onNextClick, onPlayClick, onPrevClick, onCloseClick }) {

  return (
    <div>
      <button disabled={pageNum === 0} onClick={onPrevClick}>Prev</button>
      <button disabled={pageNum === pageCount} onClick={onNextClick}>Next</button>
      {/* <button onClick={onPlayClick}>Play</button> */}
      <button onClick={onCloseClick}>Close</button>
    </div>
  )
}

export default PageControls