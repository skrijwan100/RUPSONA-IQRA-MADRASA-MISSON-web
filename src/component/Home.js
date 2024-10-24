import React from 'react'
import AutoPlaySlider from './Slider';
import slid2 from "../Asset/slidepic1.jpeg"
import slid3 from "../Asset/slide2.jpg"
import slid4 from "../Asset/slide3.jpg"
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  const slides = [
    slid4,
    slid3,
    slid2,
  ];
  return (
    <>
    <div>
     <div className="fristbox" style={{width:"100vw",backgroundColor:"#c0ffed",marginTop:"-5px",paddingBottom:"10px",marginBottom:"5px"}}>
      <div style={{textAlign:"center",fontSize:"45px",color:"#ff4000"}}>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'WELCOME !',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'WELCOME  EVERYONE !',
          1000
        ]}
        wrapper="b"
        speed={40}
        repeat={Infinity}
        style={{fontSize:"45px",color:"#ff4000"}}
        />
      </div>
       
       <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'RUPSONA IQRA MADRASA MISSION WEBSITE',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'THIS IS OUR WEBSITE',
          1000
        ]}
        wrapper="p"
        speed={40}
        repeat={Infinity}
        style={{textAlign:"center",fontSize:"35px",fontWeight:"500",color:"#1700ff"}}/>
     </div>

    </div>
    <div>
       <AutoPlaySlider slides={slides} autoPlayInterval={4000}  />
       <p style={{textAlign:"center",fontSize:"30px",color:"#0078ff"}}>Our crouse </p>
      <div className="mainbox" style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginTop:"20px"}}>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
      </div>
    </div>
    </>
  )
}
