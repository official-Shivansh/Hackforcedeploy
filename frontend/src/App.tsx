import React from 'react';

import './App.css';
import {Footer} from './Component/Footer';
import AllRoutes from './Routes/AllRoutes';
import  Navbar from './Component/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <AllRoutes/>
   <Footer/>
   
   </div>
    );
}

export default App;
