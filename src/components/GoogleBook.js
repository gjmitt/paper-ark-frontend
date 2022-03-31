import React from 'react'

function GoogleBook({ books }) {
  return (
    <div>
      <h2>Google Books ISBN Search</h2>
      {books.items.map((item) => <li key={item.id}><a target="_blank" href={item.volumeInfo.canonicalVolumeLink}>{item.volumeInfo.title}</a></li>)}
    </div>
  )
}

export default GoogleBook

