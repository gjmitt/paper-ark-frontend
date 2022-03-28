import React from 'react'

function BorrowButton({ onLoan, handleLoan }) {

  return (
    <button onClick={handleLoan}>{onLoan ? "Return" : "Borrow"}</button>
  )
}

export default BorrowButton