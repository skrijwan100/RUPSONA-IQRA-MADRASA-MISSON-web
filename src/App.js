import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Acadamic from './component/Acadamic';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Student from './component/Student';
import callimg from "./Asset/call.png"
import { useState } from 'react';
import Loader from './component/Loder';
import "./media.css"
import Mobilenav from './component/Mobilenav';




function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  
  // Function to start the loader
  const startLoader = () => {
    setProgress(0);
    setIsLoading(true);
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 50);
  };
  return (

    <Router>
      <Loader isLoading={isLoading} progress={progress}  />
      <div className='navbar'>
        <Navbar startLoader={startLoader} />
        <Mobilenav startLoader={startLoader}/>

      </div>
      <div className="scrolltext" style={{ paddingTop: "75px" }}>
        <marquee className="textscroll" behavior="alternate" direction="right" ><b>RUPSONA IQRA MADRASA MISSION  | Esat:2021 | Admisson open | <img src={callimg} alt="" style={{height:"17px",width:"19px"}} /> Call: 9735183059 , 9907653727</b></marquee>
      </div>
      <div className="element">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/acadamic' element={<Acadamic />} />
          <Route path='/contac' element={<Contact />} />
          <Route path='/student' element={<Student />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
