import React from 'react';
import Paper from "./Paper";

function PaperList({ ark }) {
  return (
    <div>
      {ark.map((paper) => <Paper key={paper.title} paper={paper} />)}
    </div>
  )
}

export default PaperList