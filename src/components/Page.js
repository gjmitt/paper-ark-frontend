import React from 'react'

function Page({ filename }) {
  return (
    <img
      height="400px"
      src={"https://" + process.env.REACT_APP_BUCKET + ".s3." + process.env.REACT_APP_REGION + ".amazonaws.com/" + filename}
    ></img>
  )
}

export default Page