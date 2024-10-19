import React, { useState } from 'react'
import logo from "../Asset/logo.jpeg"
import manu from"../Asset/menu.png"
import close from "../Asset/close.png"

export default function Mobilenav() {
    const [navlink,setnavlink]=useState(false)
    const hanldleclick=(e)=>{
        e.preventDefault();
        setnavlink(true)

    }
    const hnadleclose=(e)=>{
        e.preventDefault();
        setnavlink(false)

    }
    return (
        <>
        <div className='shownav' style={{ display: "none" }}>
            <div className="left" style={{backgroundColor:"rgb(37 36 36)",display:"flex", justifyContent:"space-between"}} >

                <span style={{ display: "flex",alignItems:"center" }}><img src={logo} alt="" style={{ width: "75px", height: "75px", borderRadius: "50%", marginRight: "10px",padding:"10px" }} /><p className='navname' style={{ color: "#00ffc2", fontWeight: "700",fontSize:"13px"}}>RUPSONA IQRA MADRASA MISSION <br />Rupsona, Raina, Purba Bardhaman, 713421</p>

                </span>
             
             <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

            <img onClick={hanldleclick} src={manu} alt="" style={{height:"30px",width:"30px"}} />
             </div>
            </div>
        </div>
         <div className={`${navlink===false?'hidelanlink':"showlanlink"}`}style={{height:"320px",width:"350px",backgroundColor: "rgb(37 36 36)",position:"fixed",zIndex:"777",right:"0",top:"0"}}>
         <img onClick={hnadleclose} src={close} alt=""   style={{height:"30px",width:"30px"}}/>
         </div>
        </>
    )
}
