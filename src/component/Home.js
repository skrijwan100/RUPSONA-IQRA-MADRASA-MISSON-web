import React from 'react'
import AutoPlaySlider from './Slider';
import slid1 from "../Asset/call.png"
import slid2 from "../Asset/logo.jpeg"
import slid3 from "../Asset/menu.png"

export default function Home() {
  const slides = [
    slid1,
    slid2,
    slid3,
  ];
  return (
    <div>
       <AutoPlaySlider slides={slides} autoPlayInterval={4000} />
      This is home page.
    </div>
  )
}
