import React, { useState } from 'react'
import logo from "../Asset/logo.jpeg"
import manu from"../Asset/menu.png"
import close from "../Asset/close.png"
import { Link, useLocation } from 'react-router-dom'

export default function Mobilenav({startLoader}) {
    const [navlink,setnavlink]=useState(false)
    const location=useLocation()
    const hanldleclick=(e)=>{
        e.preventDefault();
        setnavlink(true)

    }
    const hnadleclose=(e)=>{
        e.preventDefault();
        setnavlink(false)

    }
    const handleclick=()=>{
        startLoader()
        setnavlink(false)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        
    }
    return (
        <>
        <div className='shownav' style={{ display: "none" }}>
            <div className="left" style={{backgroundColor:"rgb(37 36 36)",display:"flex", justifyContent:"space-between"}} >

                <span style={{ display: "flex",alignItems:"center" }}><img src={logo} alt="" style={{ width: "75px", height: "75px", borderRadius: "50%", marginRight: "10px",padding:"10px" }} /><p className='navname' style={{ color: "#00ffc2", fontWeight: "700",fontSize:"13px"}}>RUPSONA IQRA MADRASA MISSION <br />Rupsona, Raina, Purba Bardhaman, 713421,GOV. REG. NO:IV0061/23</p>

                </span>
             
             <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

            <img onClick={hanldleclick} src={manu} alt="" style={{height:"30px",width:"30px"}} />
             </div>
            </div>
        </div>
         <div className={`${navlink===false?'hidelanlink':"showlanlink"}`}style={{height:"320px",width:"350px",backgroundColor: "rgb(37 36 36)",position:"fixed",zIndex:"777",right:"0",top:"0"}}>
         <img onClick={hnadleclose} src={close} alt=""   style={{height:"30px",width:"30px"}}/>
           <nav>
           <div className="right" style={{ marginRight: "22px" }}>
                    <ul style={{ display: "flex", listStyle: "none", gap: "20px",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                        <Link onClick={location.pathname==="/"?null:handleclick} className={location.pathname==="/"?"navactive":""} style={{textDecoration:"none",color:"white" ,fontSize:"18px",padding:"4px"}} to="/"><li>Home</li></Link>
                        <Link onClick={location.pathname==="/about"?null:handleclick} className={location.pathname==="/about"?"navactive":""} style={{textDecoration:"none",color:"white" ,fontSize:"18px",padding:"4px"}} to="/about"><li>About Us</li></Link>
                        <Link onClick={location.pathname==="/acadamic"?null:handleclick} className={location.pathname==="/acadamic"?"navactive":""} style={{textDecoration:"none",color:"white" ,fontSize:"18px",padding:"4px"}} to="/acadamic"><li>Acadamic</li></Link>
                        <Link onClick={location.pathname==="/student"?null:handleclick} className={location.pathname==="/student"?"navactive":""} style={{textDecoration:"none",color:"white" ,fontSize:"18px",padding:"4px"}} to="/student"><li>Student</li></Link>
                        <Link onClick={location.pathname==="/contac"?null:handleclick} className={location.pathname==="/contac"?"navactive":""} style={{textDecoration:"none",color:"white" ,fontSize:"18px",padding:"4px"}} to="/contac"><li>Contact Us</li></Link>
                    </ul>
                </div>
           </nav>
         </div>
        </>
    )
}
