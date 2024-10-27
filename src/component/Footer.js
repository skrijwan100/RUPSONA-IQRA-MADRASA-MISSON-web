import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
             <footer style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",marginTop:"30px",gap:"6  px"}}>
          <div className="logo" style={{display:"flex",gap:"40px"}}>
            <div className="logoicon">
              <Link to="https://skrijwanprotfolio.netlify.app/" target='_blank'><lord-icon
                src="https://cdn.lordicon.com/bfoumeno.json"
                trigger="hover"
                style={{ width: "50px", height: "50px" }}>
              </lord-icon></Link>
            </div>
            <div className="logoicon">
            <Link to="https://skrijwanprotfolio.netlify.app/" target='_blank'>  <lord-icon
                src="https://cdn.lordicon.com/japmxdiq.json"
                trigger="hover"
                colors="primary:#121331,secondary:#000000"
                style={{ width: "50px", height: "50px" }}>
              </lord-icon></Link>
            </div>

          </div>
          <div className="contact">
            <h2 style={{fontSize:"40px",color:"blue"}}>
            For addmission call 9735183059 , 9907653727

              </h2>
          </div>
          <div className="texfooter" style={{fontFamily:"play",fontSize:"20px"}}>
           Copyright © 2021 
          </div>
        </footer>
    </div>
  )
}
