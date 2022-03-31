import React from 'react';
import { Link } from "react-router-dom";

function PaperList({ list, material }) {

  return (
    <>
      <div>
        {list.map((paper) =>
          <li key={paper.id}>
            <Link to={`/paper/${material}/${paper.id}`}>{paper.callNum} </Link>
            {paper.title}
          </li>
        )}
      </div>
    </>
  )
}

export default PaperList

