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
    <>
      <div className="grid-book-image">
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
      </div>
      <div className="grid-book-detail">
        <table>
          <tr>
            <td>Id:</td><td>{paper.id}</td>
          </tr>
          <tr>
            <td>Call No.:</td><td>{callNum}</td>
          </tr>
          <tr>
            <td>ISBN:</td><td>{isbn}</td>
          </tr>
          <tr>
            <td>Title:</td><td>{title}</td>
          </tr>
          <tr>
            <td>Category:</td><td>{category}</td>
          </tr>
          <tr>
            <td>Year:</td><td>{year}</td>
          </tr>
          <tr>
            <td>Size:</td><td>{size}</td>
          </tr>
          <tr>
            <td>Venue:</td><td>{venue}</td>
          </tr>
          <tr>
            <td>Author:</td><td>{author}</td>
          </tr>
          <tr>
            <td>Publisher: </td><td>{publisher}</td>
          </tr>
          <tr>
            <td>Pages:</td><td>{imageCount > 0 ? imageCount : null}</td>
          </tr>
        </table>
        {googleResult.totalItems ? <GoogleBook books={googleResult} /> : null}
      </div>
    </>
  )
}

export default Paper