import Home from './Pages/Home'
import Dash from './Pages/Dash'
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import {useState} from "react";

// import { useState } from 'react'

function App() {
    const[data, setData]= useState([
        {id:1,filmName:'Aavesham',duration:'2h 41min '},
        {id:2,filmName:'Premalu',duration:"2h 36min "},
        {id:3,filmName:'Manjummel boys',duration:'2h 15min'}
    ]);

const [currentIndex, setCurrentIndex] = useState(0);    

  const dataToAdd = [
    {id:4, filmName: 'Aadujeevitham', duration: '2h 52min' },
    {id:5,filmName: 'Bahubali', duration: '2h 39min' },
    {id:6, filmName: 'Avatar', duration: '2h 42min' },
    {id:7, filmName: 'Inception',duration: '2h 28min' }
    
  ]; 

const handleAddRow = () => {
  if (currentIndex < dataToAdd.length) {
    const newData = dataToAdd[currentIndex];
    setData(prevData => [...prevData, newData]);
    setCurrentIndex(prevIndex => prevIndex + 1);
  }
};
return (
    <>
    <Router>
        <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path ='/table' element={<Dash data={data} handleAddRow={handleAddRow} />}/>
        </Routes>
    </Router>
    </>
)
}
export default App
