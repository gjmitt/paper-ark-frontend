import React from 'react'

function PaperSearchInput({ text, setText }) {

  return (
    <label>Search:
      <input
        type="text"
        name="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  )
}

export default PaperSearchInput