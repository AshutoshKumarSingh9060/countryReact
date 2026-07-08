import  {Header,Main,Search} from  './Components/index.js'
import './App.css'
import { useState } from 'react'


function App() {
  const [search,setSearch]=useState('')
  return (
   <>
    <Search setSearch={setSearch}/>
    <Main search={search}/>
   </>
  )
}

export default App
