import React from 'react'

function PaperMore({ paper }) {
  return (
    <div className="break">
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

export default PaperMore