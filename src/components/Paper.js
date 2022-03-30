import React, { useState, useEfect, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PaperControls from './PaperControls';
import BorrowButton from './BorrowButton';
import PagesButton from './PagesButton';

function Paper({ list, material }) {
  const [onLoan, setOnLoan] = useState(false)
  const [paper, setPaper] = useState({})
  const params = useParams();

  useEffect(() => {
    setPaper(list[params.paperIndex]);
    setOnLoan(list[params.paperIndex].onLoan)
  }, [list, params.paperIndex])

  function handleLoan() {
    fetch(`${process.env.REACT_APP_API_URL}/${material}/${paper.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ onLoan: !onLoan }),
    })
      .then((r) => r.json())
      .then((updated) => {
        setOnLoan(updated.onLoan);
        paper.onLoan = updated.onLoan;
      });
  }

  return (
    <div>
      <PaperControls>
        <BorrowButton onLoan={onLoan} handleLoan={handleLoan} />
        <PagesButton hasPages={paper.hasPages} />
      </PaperControls>
      <div>
        {paper.id}: {paper.title}
      </div>
      <div>
        {paper.category}
      </div>
      Year: {paper.year}<br></br>
      {paper.material === "Book" ? `Author: ${paper.author}
      Publisher: ${paper.publisher}
      Pages: ${paper.imageCount}   ISBN: ${paper.isbn}`
        : null}
      {paper.material === "Map" && paper.size > "" ? `Size: ${paper.size}\n` : null}
      {paper.material === "Event" ? `Venue: ${paper.venue}\n` : null}
    </div>
  )
}

export default Paper