import React from 'react'

function Paper({ item }) {
  return (
    <div>{item.category}: {item.title}</div>
  )
}

export default Paper