import React from 'react'
import Navigate from "./Navigate"
import Home from './webPages/Home'
import {Route, Routes} from "react-router-dom"


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