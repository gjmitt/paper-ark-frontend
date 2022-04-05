import React from 'react';
import { Link } from "react-router-dom";

function PaperList({ list, material }) {

  return (
    <>
      <ul>
        {list.map((paper) =>
          <li key={paper.id}>
            <Link to={`/paper/${material}/${paper.id}`}>{paper.callNum} </Link>
            {paper.title}
          </li>
        )}
      </ul>
    </>
  )
}

export default PaperList

