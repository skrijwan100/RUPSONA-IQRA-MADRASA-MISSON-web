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
      This is home page.
    </div>
  )
}
