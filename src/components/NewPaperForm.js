import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import CategorySelect from "./CategorySelect";

function NewPaperForm({ onNewPaper, categoryOptions, material }) {

  const [formData, setFormData] = useState({
    material: material,
    category: categoryOptions[0],
    imageCount: 0,
    title: "",
    author: "",
    year: null,
    publisher: "",
    isbn: "",
    geography: "",
    size: "",
    venue: "",
    hasPages: false,
    onLoan: false
  });

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/${formData.material}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newPaper) => {
        onNewPaper(newPaper);
        history.push(`/paper/${newPaper.material}/${newPaper.id}`)
      });
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.type === "checkbox"
      ? event.target.checked
      : event.target.value;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <div className="grid-list fields" >
        <h2>New {material.charAt(0).toUpperCase() + material.slice(1)}</h2>
        <form onSubmit={handleSubmit} >
          <p className="field-row">
            <label htmlFor="title" className="field-label">Title:</label>
            <input className="field-input" id="title" name="title" type="text" value={formData.title} onChange={handleChange} />
            <CategorySelect category={formData.category} onCategoryChange={handleChange} categoryOptions={categoryOptions} />
          </p>
          <p className="field-row">
            <label htmlFor="author" className="field-label">Author:</label>
            <input className="field-input" id="author" name="author" type="text" value={formData.author} onChange={handleChange} />
            <label htmlFor="publisher" className="field-label">Publisher:</label>
            <input className="field-input" id="publisher" name="publisher" type="text" value={formData.publisher} onChange={handleChange} />
          </p>
          <p className="field-row">
            <label htmlFor="isbn" className="field-label">ISBN:</label>
            <input className="field-input" id="isbn" name="isbn" type="text" value={formData.isbn} onChange={handleChange} />
            <label htmlFor="call-num" className="field-label">Call#:</label>
            <input className="field-input" id="call-num" name="callNum" type="text" value={formData.callNum} onChange={handleChange} />
          </p>
          <p className="field-row">
            <label htmlFor="size" className="field-label">Size:</label>
            <input className="field-input" id="size" name="size" type="text" value={formData.size} onChange={handleChange} />
            <label htmlFor="venue" className="field-label">Venue:</label>
            <input className="field-input" id="venue" name="venue" type="text" value={formData.venue} onChange={handleChange} />
          </p>
            <button className="pos-btn">Submit</button>
        </form>
      </div>
    </>
  )
}

export default NewPaperForm