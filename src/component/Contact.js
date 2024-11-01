import React, { useRef, useState } from 'react'
import callImg from '../Asset/call_black.png'
import msg from '../Asset/chat.png'
import { TypeAnimation } from 'react-type-animation';
import loading from "../Asset/load gif.gif"
export default function Contact({showAlert}) {
  const form = useRef(null);
  const [btnclick,setbtnclick]=useState(false)
const scriptURL = 'https://script.google.com/macros/s/AKfycbw52IRptA341Lh1ah1Q207G05HVhy0EtSdGP8IDD6-4xXP0WdHvGAGCr3vwPxFh9BVHQg/exec';

const onsubmit = (e) => {
  e.preventDefault();
  setbtnclick(true)
  fetch(scriptURL, { method: 'POST', body: new FormData(form.current) })
  .then((response) => {
    showAlert("Message sent successfully! we contact you soon.","success")
    form.current.reset();
    setbtnclick(false)
    })
    .catch((error) => console.error('Error!', error.message));
};

  return (
    <div style={{ marginTop: "-5px" }}>
      <div className="text" style={{ backgroundColor: "#a0ffc5", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="pic" style={{ display: "flex", justifyContent: "space-between", gap: "100px" }}>
          <img src={callImg} alt="" style={{ height: "75px", width: "75px" }} /> <span style={{ fontSize: "45px" }}>||</span>
          <img src={msg} alt="" style={{ height: "75px", width: "75px" }} />

        </div>
        <TypeAnimation className='headtext' style={{fontSize: "xx-large", color: "#ff0032", fontWeight: "700", padding: "33px" }}
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
      <div className="magcall" style={{ display: "flex", justifyContent: "space-around", margin: "20px 0px", flexWrap: "wrap", gap: "20px" }}>
        <div className="callbox" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "350px", width: "400px", borderRadius: "15px" }}>
          <img src={callImg} alt="" style={{ height: "45px", width: "45px", marginTop: "10px" }} />
          <div style={{ fontSize: "40px", fontWeight: "500", color: "red" }} className="text">Call Us </div>
          <p style={{ fontSize: "25px", color: "red", textAlign: "center" }}><b>+91 9735183059 <br /> Office number</b></p>
          <p style={{ fontSize: "25px", color: "red", textAlign: "center" }}><b>+91 9907653727 <br /> Office number</b></p>



        </div>
        <div className="msgbox" style={{ height: "350px", width: "400px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <span style={{ marginBottom: "10px", fontSize: "30px", fontWeight: "600", color: "red" }}>Message Us</span>
          <form name='submit-to-google-sheet' onSubmit={onsubmit} ref={form} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "17px 0px" }}>
            <div style={{display:"flex"}} >
              <input className='uname'name='name' style={{ outline: "none", height: "25px", width: "310px", borderRadius: "14px", border: "none", padding: "10px" }} type="text" placeholder='Enter your name' required />
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
              <input style={{ outline: "none", height: "25px", width: "310px", borderRadius: "14px", border: "none", padding: "10px" }} type="text" placeholder='Enter call number' name='number' required />
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/dnphlhar.json"
                  trigger="loop"
                  delay="2000"
                  style={{ width: "30px", height: "30px", marginLeft: "-33px", paddingTop: "3px", cursor: "pointer" }}>
                </lord-icon>

              </div>


            </div>


            <textarea style={{ outline: "none", height: "80px", width: "310px", borderRadius: "14px", border: "none", padding: "10px" }} type="text" placeholder='Enter your message' name='message' required />
            <button type='submit' className='btnmag' style={{ width: "150px", height: "39px", borderRadius: "8px", border: "none", cursor: "pointer" }}>{btnclick===false?"Send message":<img src={loading} alt="Campas" style={{height:"35px",width:"130px",background:"transparent"}} />}</button>
        

          </form>
        </div>

      </div>

    </div>

  )
}
