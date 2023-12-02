import React from 'react'
import Navigate from "./Navigate"
import Home from './webPages/Home'
import {Route, Routes} from "react-router-dom"

// The code below renders the space that holds the content in the webpage 
function App() {
 return (
  <>
  <Navigate/>
  <div className= "container">
    <Routes>
      <Route path= "/" element= {<Home/>}/>
    </Routes>
  </div>
  </>
 )
}

export default App