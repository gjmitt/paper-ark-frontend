import React, { useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom';
import PaperList from "./PaperList"
import Paper from "./Paper"
import CategorySelect from './CategorySelect';
import HasPagesCheckbox from './HasPagesCheckbox';
import PaperSearchInput from './PaperSearchInput';
import ISBNCheckbox from './ISBNCheckBox';

function PaperContainer({ ark, categoryOptions, material, onLoan }) {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Any");
  const [hasPagesFilter, setHasPagesFilter] = useState(false);
  const [isbnFilter, setIsbnFilter] = useState(false);

  const routeMatch = useRouteMatch();

  const filteredArk = ark
    .filter((paper) => categoryFilter === "Any" ? true : paper.category === categoryFilter)
    .filter((paper) => !hasPagesFilter ? true : paper.hasPages)
    .filter((paper) => !isbnFilter ? true : paper.isbn !== "")
    .filter((paper) => paper.title.toUpperCase().includes(searchText.toUpperCase()));

  function handleCategoryChange(event) {
    setCategoryFilter(event.target.value);
  }

  return (
    <>
      <div className="grid-sub-header">
        <h2>{material.charAt(0).toUpperCase() + material.slice(1)}s List</h2>
        <PaperSearchInput text={searchText} setText={setSearchText} />
        <CategorySelect
          category={categoryFilter}
          onCategoryChange={handleCategoryChange}
          categoryOptions={["Any", ...categoryOptions]}
        />
        <HasPagesCheckbox checkboxValue={hasPagesFilter} onCheckboxChange={setHasPagesFilter} />
        <ISBNCheckbox checkboxValue={isbnFilter} onCheckboxChange={setIsbnFilter} />
      </div>
      <div className="grid-main paper-list">
        <PaperList list={filteredArk} material={material} />
      </div>
      <Route path={`${routeMatch.url}/${material}/:paperId`}>
        <Paper
          key={new Date()} list={ark} selectedMaterial={material} toggleOnLoan={onLoan} />
      </Route>
    </>
  )
}

export default PaperContainer