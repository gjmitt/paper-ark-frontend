import React from 'react'

function PaperSortSelect() {

function handleSortSelect(e) {
  console.log("Sort selected", e.target.value)
}

  return (
    <select onChange={handleSortSelect}>
      <option>Id</option>
      <option>Title</option>
    </select>
  )
}

export default PaperSortSelect