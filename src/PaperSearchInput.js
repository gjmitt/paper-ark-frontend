import React from 'react'

function PaperSearchInput() {
  function handleSearchInput(e) {
    console.log(e.target.value)
  }

  return (
    <div>Search:
      <input
        type="text"
        name="search"
        value=""
        onChange={handleSearchInput}
      />
    </div>
  )
}

export default PaperSearchInput