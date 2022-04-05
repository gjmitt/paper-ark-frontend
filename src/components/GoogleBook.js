import React from 'react'

function GoogleBook({ books }) {
  return (
    <>
      <h3>Google Books ISBN Search</h3>
      {books.items.map((item) =>
        <li
          key={item.id}>
          <a
            target="_blank"
            rel="noreferrer"
            href={item.volumeInfo.canonicalVolumeLink}
          >
            {item.volumeInfo.title}
          </a>
        </li>)}
    </>
  )
}

export default GoogleBook

