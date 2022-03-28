import React from 'react'

function NewPaperButton() {

  function handleNewClick(e) {
    console.log("New Paper button click")
  }

  return (
    <button onClick={handleNewClick}>New Paper</button>
  )
}

export default NewPaperButton