import React from 'react'

function HasPagesCheckbox({ checkboxValue, onCheckboxChange }) {

  return (
    <label>Pages?
      <input
        type="checkbox"
        value={checkboxValue}
        onChange={(e) => onCheckboxChange(e.target.checked)}
      />

    </label>
  )
}

export default HasPagesCheckbox