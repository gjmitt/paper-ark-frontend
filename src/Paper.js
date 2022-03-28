import React from 'react';
import PaperControls from './PaperControls';

function Paper({ item }) {
  return (
    <div>
      {item.category}: {item.title}
      <PaperControls />
    </div>
  )
}

export default Paper