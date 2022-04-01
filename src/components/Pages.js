import React, { useState } from 'react';
import PageControls from './PageControls';
import Page from './Page';

function Pages({ callNum, pageCount, setShowPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 0);

  const handleNext = () => setCurrentPage(currentPage < pageCount ? currentPage + 1 : pageCount);

  const handleClose = () => setShowPages(false);

  const handlePlay = () => null;

  return (
    <>
      <h3>Pages</h3>
      <PageControls
        pageNum={currentPage}
        pageCount={pageCount}
        onPrevClick={handlePrev}
        onNextClick={handleNext}
        onPlayClick={handlePlay}
        onCloseClick={handleClose}
      />
      <Page callNum={callNum} pageNum={currentPage} />
    </>


  )
}

export default Pages