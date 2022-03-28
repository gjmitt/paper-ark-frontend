import React from 'react'
import PaperList from "./PaperList"
import PaperListControls from './PaperListControls'
import NewPaperForm from './NewPaperForm'

function PaperListContainer({ ark }) {
  return (
    <>
      <PaperListControls />
      <NewPaperForm />
      <PaperList ark={ark} />
    </>
  )
}

export default PaperListContainer