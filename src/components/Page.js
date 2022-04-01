import React from 'react'

function Page({ callNum, pageNum }) {
  const region = 'us-east-2';
  const bucket = 'demo-liber-alch-paper';

  const url = `https://${bucket}.s3.${region}.amazonaws.com/pages/${callNum}/${callNum}_${pageNum.toString().padStart(4, '0')}.png`

  return (
    <img
      height="300px"
      src={url}
    ></img>
  )
}

export default Page