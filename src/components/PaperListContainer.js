import React, { useState } from 'react'
import PaperList from "./PaperList"
import PaperListControls from './PaperListControls'
import CategoryFilterSelect from './CategoryFilterSelect';
import HasPagesCheckbox from './HasPagesCheckbox';
import PaperSearchInput from './PaperSearchInput';
import PaperSortSelect from './PaperSortSelect';

function PaperListContainer({ items }) {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [pagesFilter, setPagesFilter] = useState(false)

  function selectPaperForDisplay() {
    return items;
  }

  return (
    <>
      <PaperListControls>
        <PaperSearchInput text={searchText} setText={setSearchText} />
        <CategoryFilterSelect />
        <PaperSortSelect />
        <HasPagesCheckbox />
      </PaperListControls>
      <PaperList ark={selectPaperForDisplay()} />
    </>
  )
}

export default PaperListContainer