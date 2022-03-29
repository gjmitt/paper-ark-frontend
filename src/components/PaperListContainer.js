import React, { useState, useEffect } from 'react'
import PaperList from "./PaperList"
import PaperListControls from './PaperListControls'
import CategorySelect from './CategorySelect';
import HasPagesCheckbox from './HasPagesCheckbox';
import PaperSearchInput from './PaperSearchInput';
import PaperSortSelect from './PaperSortSelect';

function PaperListContainer({ ark, material, getCategorys }) {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Any");
  const [hasPagesFilter, setHasPagesFilter] = useState(false);
  // const [sortKey, setSortKey] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    const filteredArk = ark
      .filter((paper) => categoryFilter === "Any" ? true : paper.category === categoryFilter)
      .filter((paper) => material === "" ? true : paper.material === material)
      .filter((paper) => !hasPagesFilter ? true : paper.hasPages)
      .filter((paper) => isSearchMatch(paper, searchText));
    setDisplayList(filteredArk);
    setCategoryOptions(getCategorys(filteredArk));
  }, [ark, material, searchText, categoryFilter, hasPagesFilter])

  function isSearchMatch(candidate, text) {
    const textValues = candidate.title + candidate.venue + candidate.publisher;
    return textValues.toUpperCase().includes(text.toUpperCase());
  }

  function handleCategoryChange(event) {
    setCategoryFilter(event.target.value);
  }

  return (
    <>
      <PaperListControls>
        <PaperSearchInput text={searchText} setText={setSearchText} />
        <CategorySelect
          category={categoryFilter}
          onCategoryChange={handleCategoryChange}
          categoryOptions={categoryOptions}
        />
        <PaperSortSelect />
        <HasPagesCheckbox checkboxValue={hasPagesFilter} onCheckboxChange={setHasPagesFilter} />
      </PaperListControls>
      <PaperList list={displayList} />
    </>
  )
}

export default PaperListContainer