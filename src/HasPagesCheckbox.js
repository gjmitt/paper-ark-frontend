import React from 'react'

function HasPagesCheckbox() {

  function handleCheckBox(e) {
    console.log("Has Pages checkbox changed", e.target.checked)
  }


  return (
    <input
      name="hasPageCheckbox"
      type="checkbox"
      onChange={handleCheckBox}
    />
  )
}

export default HasPagesCheckbox