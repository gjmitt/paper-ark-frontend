import React from 'react'

function CategorySelect({ category, onCategoryChange, categoryOptions }) {
  return (
    <label>
      Category:
      <select name="category" value={category} onChange={(event) => onCategoryChange(event)} >
        {categoryOptions.map((item) =>
          <option key={item} value={item}>{item}</option>
        )}
      </select>
    </label>
  )
}

export default CategorySelect;
