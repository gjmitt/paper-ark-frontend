import React from 'react';
import Paper from "./Paper";

function PaperList({ list }) {

  return (
    <div>
      {list.map((paper) => <Paper key={paper.title} paper={paper} />)}
    </div>
  )
}

export default PaperList