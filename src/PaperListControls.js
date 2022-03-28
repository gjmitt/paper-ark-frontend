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
      <PaperSearchInput />
      <CategoryFilterSelect />
      <PaperSortSelect />
      <HasPagesCheckbox />
      <NewPaperButton />
    </div>

  )
}

export default PaperListControls