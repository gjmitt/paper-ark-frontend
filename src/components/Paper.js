import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PaperControls from './PaperControls';
import BorrowButton from './BorrowButton';
import PagesButton from './PagesButton';
import GoogleBook from './GoogleBook';
import Pages from './Pages';
import Page from './Page';

function Paper({ list, selectedMaterial, toggleOnLoan }) {
  const [googleResult, setGoogleResult] = useState([]);
  const [showPages, setShowPages] = useState(false);

  const params = useParams();
  const paper = list.find((item) => (item.id == params.paperId)); // Be careful with equivalence, params is a string value!
  const { callNum, category, material, author, title, publisher, isbn, year, size, venue, hasPages, onLoan, imageCount, coverImageFilename } = paper;

  useEffect(() => {
    if (isbn !== "") {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&langRestrict=%22en%22&printType=books&projection=lite`)
        .then((resp) => resp.json())
        .then((result) => setGoogleResult(result))
    } else {
      setGoogleResult([]);
    }
  }, [paper, isbn])

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
      <h2>{material}</h2>
      {showPages
        ? <Pages callNum={callNum} setShowPages={setShowPages} selectedMaterial={selectedMaterial} />
        : <>
          <PaperControls>
            <BorrowButton onLoan={onLoan} handleLoan={handleLoan} />
            <PagesButton hasPages={hasPages} onButtonClick={() => setShowPages(!showPages)} />
          </PaperControls>
          {coverImageFilename !== ""
            ? <Page filename={`covers/${coverImageFilename}`} />
            : null}
        </>
      }
      <div>
        Id: {paper.id}<br></br>
        {callNum}: {title}<br></br>
        Category: {category}
        Year: {year}<br></br>
        {material === "Book"
          ? `Author: ${author}
      Publisher: ${publisher}
      Pages: ${imageCount}   ISBN: ${isbn}`
          : null}
        {material === "Map" && size > "" ? `Size: ${size}\n` : null}
        {material === "Event" ? `Venue: ${venue}\n` : null}
      </div>
      {googleResult.totalItems ? <GoogleBook books={googleResult} /> : null}
    </div>
  )
}

export default Paper