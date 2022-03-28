import React from 'react'
import PaperList from "./PaperList"
import PaperListControls from './PaperListControls'
import NewPaperForm from './NewPaperForm'

function PaperListContainer({ items }) {
  return (
    <>
      <PaperListControls />
      <NewPaperForm />
      <PaperList items={items} />
    </>
  )
}

export default PaperListContainer