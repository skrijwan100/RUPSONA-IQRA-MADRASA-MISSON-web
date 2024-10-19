import React from 'react'
import AutoPlaySlider from './Slider';
import slid2 from "../Asset/slidepic1.jpeg"


export default function Home() {
  const slides = [
    slid2,
    slid2,
    slid2,
  ];
  return (
    <div>
       <AutoPlaySlider slides={slides} autoPlayInterval={4000}  />
       <p style={{textAlign:"center",fontSize:"30px",color:"#0078ff"}}>Our crouse </p>
      <div className="mainbox" style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginTop:"20px"}}>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
      </div>
    </div>
  )
}
