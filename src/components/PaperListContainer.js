import React, { useState, useEffect } from 'react'
import { Route, useRouteMatch } from 'react-router-dom';
import PaperList from "./PaperList"
import Paper from "./Paper"
import PaperListControls from './PaperListControls'
import CategorySelect from './CategorySelect';
import HasPagesCheckbox from './HasPagesCheckbox';
import PaperSearchInput from './PaperSearchInput';

function PaperListContainer({ ark, getCategorys, material }) {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Any");
  const [hasPagesFilter, setHasPagesFilter] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [displayList, setDisplayList] = useState([]);

  const match = useRouteMatch();

  useEffect(() => {
    const filteredArk = ark
      .filter((paper) => categoryFilter === "Any" ? true : paper.category === categoryFilter)
      .filter((paper) => !hasPagesFilter ? true : paper.hasPages)
      .filter((paper) => isSearchMatch(paper, searchText));
    setDisplayList(filteredArk);
    setCategoryOptions(getCategorys(filteredArk));
  }, [ark, material, searchText, categoryFilter, hasPagesFilter, getCategorys])

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
        <HasPagesCheckbox checkboxValue={hasPagesFilter} onCheckboxChange={setHasPagesFilter} />
      </PaperListControls>
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
      <Route path={`${match.url}/${material}/:paperIndex`}>
        <Paper list={displayList} material={material} />
      </Route>
      <PaperList list={displayList} material={material} />
    </>
  )
}

export default PaperListContainer