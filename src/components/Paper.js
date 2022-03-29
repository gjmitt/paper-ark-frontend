import React, { useState } from 'react';
import PaperControls from './PaperControls';
import MoreButton from './MoreButton';
import BorrowButton from './BorrowButton';
import PagesButton from './PagesButton';
import PaperMore from "./PaperMore";

function Paper({ paper }) {
  const [showMore, setShowMore] = useState(false);
  const [onLoan, setOnLoan] = useState(paper.onLoan)

  function handleLoan() {
    fetch(`${process.env.REACT_APP_API_URL}/paper/${paper.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ onLoan: !onLoan }),
    })
      .then((r) => r.json())
      .then((updated) => setOnLoan(updated.onLoan));
  }

  return (

    <div>
      <PaperControls>
        <MoreButton showMore={showMore} setShowMore={setShowMore} />
        <BorrowButton onLoan={onLoan} handleLoan={handleLoan} />
        <PagesButton hasPages={paper.hasPages} />
      </PaperControls>
      <div>
        {paper.id}: {paper.title}
      </div>
      <span>
        {paper.material}-
      </span>
      <span>
        {paper.category}
      </span>
      {showMore ? <PaperMore paper={paper} /> : null}
    </div>
  )
}

export default Paper