import React from 'react'

function ISBNCheckbox({ checkboxValue, onCheckboxChange }) {

  return (
    <label>ISBN?
      <input
        type="checkbox"
        value={checkboxValue}
        onChange={(e) => onCheckboxChange(e.target.checked)}
      />

    </label>
  )
}

export default ISBNCheckbox