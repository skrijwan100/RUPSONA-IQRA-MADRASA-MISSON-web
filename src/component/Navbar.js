import React from 'react'
import logo from "../Asset/logo.jpeg"
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({startLoader}) {
    const location= useLocation()
    const handleclick=(e)=>{
        startLoader()
    }
    return (
        <div className='navhide'>
            <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgb(37 36 36)", color: "white", cursor: "pointer" }}>
                <div className="left" >

                    <span style={{ display: "flex" }}><img src={logo} alt="" style={{ width: "75px", height: "75px",borderRadius:"50%", marginRight:"10px"}} /><p className='navname' style={{ color: "#00ffc2", fontWeight: "700" }}>RUPSONA IQRA MADRASA MISSION <br />Rupsona, Raina, Purba Bardhaman, 713421</p>

                    </span>


                </div>
                <div className="right" style={{ marginRight: "22px" }}>
                    <ul style={{ display: "flex", listStyle: "none", gap: "20px",alignItems:"center",justifyContent:"center"}}>
                        <Link onClick={location.pathname==="/"?null:handleclick} className={location.pathname==="/"?"navactive":""} style={{textDecoration:"none",color:"white" ,fontSize:"18px",padding:"4px"}} to="/"><li>Home</li></Link>
                        <Link onClick={location.pathname==="/about"?null:handleclick} className={location.pathname==="/about"?"navactive":""} style={{textDecoration:"none",color:"white" ,fontSize:"18px",padding:"4px"}} to="/about"><li>About Us</li></Link>
                        <Link onClick={location.pathname==="/acadamic"?null:handleclick} className={location.pathname==="/acadamic"?"navactive":""} style={{textDecoration:"none",color:"white" ,fontSize:"18px",padding:"4px"}} to="/acadamic"><li>Acadamic</li></Link>
                        <Link onClick={location.pathname==="/student"?null:handleclick} className={location.pathname==="/student"?"navactive":""} style={{textDecoration:"none",color:"white" ,fontSize:"18px",padding:"4px"}} to="/student"><li>Student</li></Link>
                        <Link onClick={location.pathname==="/contac"?null:handleclick} className={location.pathname==="/contac"?"navactive":""} style={{textDecoration:"none",color:"white" ,fontSize:"18px",padding:"4px"}} to="/contac"><li>Contact Us</li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
