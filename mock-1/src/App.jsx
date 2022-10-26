import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import {Routes, Route} from "react-router-dom"

import Home from "./Components/Home"
import Puppy from "./Components/Puppy"
import Navbar from './Components/Navbar';
import Search from './Components/Search';
function App() {
  const navigate= useNavigate()
  const [data,setData]=useState([])
  const [name, setName] = useState("")
  
  return (
    <div className='App'>
      <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:puppy" element={<Puppy/>}/>
    <Route path='/search' element={<Search/>}/>


   </Routes>
      

    </div>
  );
}

export default App;
