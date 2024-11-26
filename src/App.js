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
import Alert from './component/Alert';




function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [alert, setalert] = useState(null)

  
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
  const showAlert = (msg, ty) => {
    setalert({
      msg: msg,
      ty: ty
    })
  }
  return (

    <Router>
      <Loader isLoading={isLoading} progress={progress}  />
      <Alert alert={alert}/>
      <div className='navbar'>
        <Navbar startLoader={startLoader} />
        <Mobilenav startLoader={startLoader}/>

      </div>
      <div className="scrolltext" style={{ paddingTop: "75px" }}>
        <div className="textscroll" behavior="alternate" direction="right" ><b>RUPSONA IQRA MADRASA MISSION  | Estd:2021 | Admisson open | <img src={callimg} alt="" style={{height:"17px",width:"19px"}} /> Call: 9735183059 , 9907653727</b></div>
      </div>
      <div className="element">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/acadamic' element={<Acadamic />} />
          <Route path='/contac' element={<Contact showAlert={showAlert} />} />
          <Route path='/student' element={<Student />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
