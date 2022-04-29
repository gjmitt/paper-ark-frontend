import React from 'react'

function Page({ filename }) {
  // console.log("Page render filename", filename);
  return (
    <>
      {filename !== ""
        ? <img
          src={"https://" + process.env.REACT_APP_BUCKET + ".s3." + process.env.REACT_APP_REGION + ".amazonaws.com/" + filename}
          alt="Page in a book."
        ></img>
        : null
      }
    </>
  )
}

export default Page