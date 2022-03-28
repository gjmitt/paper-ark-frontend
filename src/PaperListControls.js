import React from 'react';
import CategoryFilterSelect from './CategoryFilterSelect';
import HasPagesCheckbox from './HasPagesCheckbox';
import PaperSearchInput from './PaperSearchInput';
import PaperSortSelect from './PaperSortSelect';
import NewPaperButton from './NewPaperButton';

function PaperListControls() {
  return (
    <div>
      <h2>Paper List Controls</h2>
      <span><PaperSearchInput /></span>
      <span><CategoryFilterSelect /></span>
      <span><PaperSortSelect /></span>
      <span><HasPagesCheckbox /></span>
      <span><NewPaperButton /></span>
    </div>

  )
}

export default PaperListControls