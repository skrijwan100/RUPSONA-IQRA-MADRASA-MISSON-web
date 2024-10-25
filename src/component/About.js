import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import brdroompic1 from "../Asset/bedroompic1.jpg"
import foodroutine from "../Asset/foodroutine.jpeg"
export default function About() {
  return (
    <>
    <div>
     <div className="fristbox" style={{width:"100vw",backgroundColor:"#c0ffed",marginTop:"-5px",paddingBottom:"10px"}}>
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
    <TypeAnimation
     sequence={[
      // Same substring at the start will only be typed out once, initially
      'Our Target ',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'আমাদের লক্ষ্য',
      1000
    ]}
    wrapper="p"
    speed={40}
    repeat={Infinity}
     style={{textAlign:"center",fontSize:"45px",color:"#ff0000"}}

     />


     <div className="container" style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",backgroundColor:"#a0ffc5",gap:"20px",marginBottom:"10px"}}>
      <div className="targettext" style={{width:"509px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <b style={{color:"#00a539",fontSize:"30px",textDecoration:"underline"}}>লক্ষ্য</b><span style={{fontSize:"25px"}}>কোরান সুন্নাহর আলোকে শিক্ষার্থীকে যুগোপযোগী আন্তর্জাতিক মানসম্পন্ন চরিত্রবান হাফেজ ক্কারী হিসেবে গড়ে তোলা এবং পৃথিবীর শ্রেষ্ঠ মনীষীদের পদাঙ্ক অনুসরণ করে এক বিংশ শতাব্দীর চ্যালেঞ্জ মোকাবেলায় প্রস্তুত করে তোলা।</span> <br />
      <div><b style={{color:"#00a539",fontSize:"25px",textDecoration:"underline"}}>যেমন:-</b><span  style={{fontSize:"20px",fontWeight:"550"}}>বিভিন্ন দেশে আন্তর্জাতিক প্রতিযোগিতায় অংশগ্রহণ, ইত্যাদি...</span> </div>
      </div>
      <div className="tergetpic">
        <img  className="tpic"src={brdroompic1} alt="" style={{height:"280px",width:"400px"}}/>
      </div>
    </div>
    <TypeAnimation
     sequence={[
      // Same substring at the start will only be typed out once, initially
      'Our Recent event ',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'আমাদের সাম্প্রতিক ঘটনা',
      1000
    ]}
    wrapper="p"
    speed={40}
    repeat={Infinity}
     style={{textAlign:"center",fontSize:"45px",color:"#ff0000"}}

     />
        <div className="container" style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",backgroundColor:"#a0ffc5",gap:"20px",marginBottom:"10px"}}>
      <div className="targettext" style={{width:"509px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <b style={{color:"#00a539",fontSize:"30px",textDecoration:"underline"}}>ভ্রমণ</b><span style={{fontSize:"25px"}}>কলকাতা ভ্রমণ</span>
      </div>
      <div className="tergetpic">
        <img  className="tpic"src={brdroompic1} alt="" style={{height:"280px",width:"400px"}}/>
      </div>
    </div>

    <TypeAnimation
     sequence={[
      // Same substring at the start will only be typed out once, initially
      'Our weekly food routine',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'আমাদের সাপ্তাহিক খাবারের রুটিন',
      1000
    ]}
    wrapper="p"
    speed={40}
    repeat={Infinity}
     style={{textAlign:"center",fontSize:"45px",color:"#ff0000"}}

     />
        <div className="container" style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",backgroundColor:"#a0ffc5",gap:"20px",marginBottom:"10px"}}>
        <div className="tergetpic" style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        <div style={{fontSize:"30px",textAlign:"center",color:"#8032cd"}}>খাদ্য তালিকা</div> 
        <img className="tpic" src={foodroutine} alt="" style={{height:"280px",width:"400px"}} />
      <a href={foodroutine} download={foodroutine} style={{textAlign:"center"}}><button className='btnfood'>Download food routine</button></a>  
        </div> 
      
      <div className="tergetpic" style={{display:"flex",flexDirection:"column",gap:"10px"}}>
       <div style={{fontSize:"30px",textAlign:"center",color:"#8032cd"}}>Meal space</div> 
        <img  className="tpic"src={brdroompic1} alt="" style={{height:"280px",width:"400px"}}/>
      </div>
    </div>
        </>
  )
}
