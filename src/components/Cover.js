import React from 'react'

function Cover({ filename }) {
  const region = 'us-east-2';
  const bucket = 'demo-liber-alch-paper';

  return (
    <img
      width="200px"
      src={`https://${bucket}.s3.${region}.amazonaws.com/covers/${filename}`}
    ></img>
  )
}

export default Cover