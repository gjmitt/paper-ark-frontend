import React from 'react'

function Page({ filename }) {
  return (
    <div>
      {filename !== ""
        ? <img
          height="400px"
          src={"https://" + process.env.REACT_APP_BUCKET + ".s3." + process.env.REACT_APP_REGION + ".amazonaws.com/" + filename}
          alt="Page in a book."
        ></img>
        : null
      }
    </div>
  )
}

export default Page