import React, { useState, useEffect } from 'react'
import PaperList from "./PaperList"
import PaperListControls from './PaperListControls'
import CategoryFilterSelect from './CategoryFilterSelect';
import HasPagesCheckbox from './HasPagesCheckbox';
import PaperSearchInput from './PaperSearchInput';
import PaperSortSelect from './PaperSortSelect';

function PaperListContainer({ ark, material }) {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Any");
  const [sortKey, setSortKey] = useState("");
  const [hasPagesFilter, setHasPagesFilter] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState(["Any", "Hardware", "Software"]);

  function getDisplayList() {
    return ark
      .filter((paper) => categoryFilter === "Any" ? true : paper.category === categoryFilter)
      .filter((paper) => material === "" ? true : paper.material === material)
      .filter((paper) => !hasPagesFilter ? true : paper.hasPages)
      .filter((paper) => isSearchMatch(paper, searchText))
  }

  function getCategorysForDisplayList() {
    return ["Any", "Hardware", "Software"]
  }

  function isSearchMatch(item, text) {
    const textValues = item.title + item.venue + item.publisher;
    return textValues.toUpperCase().includes(text.toUpperCase());
  }

  return (
    <>
      <PaperListControls>
        <PaperSearchInput text={searchText} setText={setSearchText} />
        <CategoryFilterSelect
          category={categoryFilter}
          onCategoryChange={setCategoryFilter}
          categoryOptions={categoryOptions}
        />
        <PaperSortSelect />
        <HasPagesCheckbox checkboxValue={hasPagesFilter} onCheckboxChange={setHasPagesFilter} />
      </PaperListControls>
      <PaperList list={getDisplayList()} />
    </>
  )
}

export default PaperListContainer