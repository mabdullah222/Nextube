import React,{useState} from "react"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Videos from "./components/Videos";
function App() {
  const [open,setOpen]=useState(false);
  const [query,setQuery]=useState('');
  return (
    <div className="text-blue-300">
      <Navbar setOpen={setOpen} setQuery={setQuery}></Navbar>
      <Sidebar open={open} setOpen={setOpen} setQuery={setQuery}></Sidebar>
      <Videos query={query}></Videos>
    </div>
  )
}

export default App
