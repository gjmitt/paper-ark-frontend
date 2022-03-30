import React from 'react';
import { useParams } from 'react-router-dom';
import PaperControls from './PaperControls';
import BorrowButton from './BorrowButton';
import PagesButton from './PagesButton';

function Paper({ list, selectedMaterial, toggleOnLoan }) {
  const params = useParams();
  const paper = list[params.paperIndex];
  const { callNum, category, material, author, title, publisher, isbn, year, size, venue, hasPages, onLoan, imageCount } = paper;

  function handleLoan() {
    fetch(`${process.env.REACT_APP_API_URL}/${selectedMaterial}/${paper.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ onLoan: !onLoan }),
    })
      .then((r) => r.json())
      .then(() => toggleOnLoan(paper.id)
      );
  }

  return (
    <div>
      <PaperControls>
        <BorrowButton onLoan={onLoan} handleLoan={handleLoan} />
        <PagesButton hasPages={hasPages} />
      </PaperControls>
      <div>
        Id: {paper.id}<br></br>
        {callNum}: {title}<br></br>
        Category: {category}
      </div>
      Year: {year}<br></br>
      {material === "Book" ? `Author: ${author}
      Publisher: ${publisher}
      Pages: ${imageCount}   ISBN: ${isbn}`
        : null}
      {material === "Map" && size > "" ? `Size: ${size}\n` : null}
      {material === "Event" ? `Venue: ${venue}\n` : null}
    </div>
  )
}

export default Paper