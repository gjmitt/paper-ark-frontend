import React from 'react'

function CategorySelect({ category, onCategoryChange, categoryOptions }) {
  return (
    <>
      <label htmlFor="category" className="field-label">Category:
      </label>
      <select id="category" name="category" value={category} onChange={(event) => onCategoryChange(event)} >
        {categoryOptions.map((item) =>
          <option key={item} value={item}>{item}</option>
        )}
      </select>
    </>
  )
}

export default CategorySelect;
