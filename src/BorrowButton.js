import React from 'react'

function BorrowButton() {

  function handleBorrowClick(e) {
    console.log("Borrow button click")
  }

  return (
    <button onClick={handleBorrowClick}>Borrow</button>
  )
}

export default BorrowButton