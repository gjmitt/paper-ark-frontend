import React from 'react'

function PaperSearchInput({ text, setText }) {

  return (
    <div>Search:
      <input
        type="text"
        name="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default PaperSearchInput