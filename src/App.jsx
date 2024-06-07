import { BrowserRouter, Route, Routes } from "react-router-dom";


import Banner from './components/Banner.jsx'
import Home from './page/Home.jsx';
import Ludics from './page/Ludics.jsx';
import AndMore from "./page/AndMore.jsx";
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Banner />
    <Routes>    
        <Route index path="/" element={<Home />} />
        <Route path="/ludics" element={<Ludics />} />
        <Route path="/and-more" element={<AndMore />} />
    </Routes>
  </BrowserRouter>
   
    
    
    
  )
}

export default App
