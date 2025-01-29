import React from 'react'
import FetchData from './Components/FetchData'
import FetchYogaData from './Components/FetchYogaData'

function App() {
  return (
    <>
      <h1>Diet</h1>
      <FetchData/>
      <h1>Yoga Excercises</h1>
      <FetchYogaData/>
    </>
  )
}

export default App