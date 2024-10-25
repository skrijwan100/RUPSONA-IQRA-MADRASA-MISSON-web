import React from 'react'
import callImg from '../Asset/call_black.png'
import msg from '../Asset/chat.png'
import { TypeAnimation } from 'react-type-animation';
export default function Contact() {

  return (
    <div style={{ marginTop: "-5px" }}>
      <div className="text" style={{ backgroundColor: "#445871", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="pic" style={{ display: "flex", justifyContent: "space-between", gap: "100px" }}>
          <img src={callImg} alt="" style={{ height: "75px", width: "75px" }} /> <span style={{ fontSize: "45px" }}>||</span>
          <img src={msg} alt="" style={{ height: "75px", width: "75px" }} />

        </div>
        <TypeAnimation className='headtext' style={{fontSize: "xx-large", color: "#00ffa4", fontWeight: "700", padding: "33px" }}
         sequence={[
          // Same substring at the start will only be typed out once, initially
          '  Call us for Admisson',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'OR',
          700,
          'Send a message for Admisson',
          2000,
        ]}
        wrapper="div"
        speed={50}
        repeat={Infinity}/>

      </div>
      <div className="magcall" style={{ display: "flex", justifyContent: "space-around", margin: "10px 0px", flexWrap: "wrap", gap: "20px" }}>
        <div className="callbox" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "350px", width: "400px", borderRadius: "30px" }}>
          <img src={callImg} alt="" style={{ height: "45px", width: "45px", marginTop: "10px" }} />
          <div style={{ fontSize: "40px", fontWeight: "500", color: "#00ff42" }} className="text">Call Us </div>
          <p style={{ fontSize: "25px", color: "#2096ff", textAlign: "center" }}><b>+91 9735183059 <br /> name</b></p>
          <p style={{ fontSize: "25px", color: "#2096ff", textAlign: "center" }}><b>+91 9907653727 <br /> name</b></p>



        </div>
        <div className="msgbox" style={{ height: "350px", width: "400px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <span style={{ marginBottom: "10px", fontSize: "30px", fontWeight: "600", color: "#00ff42" }}>Message Us</span>
          <form action="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "17px 0px" }}>
            <div style={{display:"flex"}} >
              <input className='uname' style={{ outline: "none", height: "25px", width: "310px", borderRadius: "14px", border: "none", padding: "10px" }} type="text" placeholder='Enter your name' required />
              <div>
              <lord-icon
                src="https://cdn.lordicon.com/kdduutaw.json"
                trigger="loop"
                delay="1000"
                state="hover-looking-around"
                style={{ width: "30px", height: "30px", marginLeft: "-33px", paddingTop: "3px", cursor: "pointer" }}>
              </lord-icon>


              </div>
            

            </div>
            <div style={{display:"flex"}}>
              <input style={{ outline: "none", height: "25px", width: "310px", borderRadius: "14px", border: "none", padding: "10px" }} type="text" placeholder='Enter call number' required />
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/dnphlhar.json"
                  trigger="loop"
                  delay="2000"
                  style={{ width: "30px", height: "30px", marginLeft: "-33px", paddingTop: "3px", cursor: "pointer" }}>
                </lord-icon>

              </div>


            </div>


            <textarea style={{ outline: "none", height: "80px", width: "310px", borderRadius: "14px", border: "none", padding: "10px" }} type="text" placeholder='Enter your message' required />
            <button className='btnmag' style={{ width: "150px", height: "39px", borderRadius: "11px", border: "none", cursor: "pointer" }}>Send message</button>
          </form>
        </div>

      </div>

    </div>

  )
}
