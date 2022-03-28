import React from 'react'

function MoreButton({ showMore, setShowMore }) {

  return (
    <button onClick={() => setShowMore(!showMore)} >
      {showMore ? "Less" : "More"}
    </button>
  )
}

export default MoreButton