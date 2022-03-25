import React from 'react';
import Paper from "./Paper";

function PaperList({ items }) {
  return (
    <div>
      {items.map((item) => <Paper key={item.title} item={item} />)}
    </div>
  )
}

export default PaperList