import React from 'react'
import logo from "../Asset/logo.jpeg"
import manu from"../Asset/menu.png"

export default function Mobilenav() {
    return (
        <div className='shownav' style={{ display: "none" }}>
            <div className="left" style={{backgroundColor:"rgb(37 36 36)",display:"flex", justifyContent:"space-between"}} >

                <span style={{ display: "flex" }}><img src={logo} alt="" style={{ width: "75px", height: "75px", borderRadius: "50%", marginRight: "10px",padding:"10px" }} /><p className='navname' style={{ color: "#00ffc2", fontWeight: "700",fontSize:"13px"}}>RUPSONA IQRA MADRASA MISSION <br />Rupsona, Raina, Purba Bardhaman, 713421</p>

                </span>
             
             <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

            <img src={manu} alt="" style={{height:"30px",width:"30px"}} />
             </div>
            </div>
        </div>
    )
}
