import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import foodroutine from "../Asset/foodroutine.jpeg"
import travell1 from "../Asset/grute2.jpg"
import travell2 from "../Asset/travell1.jpg"
import Footer from './Footer';
import travell3 from "../Asset/travell2.jpeg"
import mealpic from "../Asset/mealpic1.jpg"
export default function About() {
  return (
    <>
      <div>
        <div className="fristbox" style={{ width: "100vw", backgroundColor: "#c0ffed", marginTop: "-5px", paddingBottom: "10px" }}>
          <div style={{ textAlign: "center", fontSize: "45px", color: "#ff4000" }}>
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
              style={{ fontSize: "45px", color: "#ff4000" }}
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
            style={{ textAlign: "center", fontSize: "35px", fontWeight: "500", color: "#1700ff" }} />
        </div>

      </div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Catering services provided by the Institute',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'প্রতিষ্ঠান তরফ হইতে থাকা খাওয়ার পরিষেবা সমূহ ',
          1000
        ]}
        wrapper="h2"
        speed={40}
        className='type-text-more'
        repeat={Infinity}
        style={{ textAlign: "center", fontSize: "45px", color: "#ff0000" }}

      />

      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

    
      <div className="moreabout " style={{ display: "flex",justifyContent:"center", flexWrap: "wrap", backgroundColor: "#a0ffc5", gap: "20px", marginBottom: "10px",borderRadius:"15px" }}>
        <div className="targettext" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",padding:"15px" }}>
         <ul style={{fontSize:"22px"}}>
          <li>সকাল ৬-৭ টার মধ্যে নাস্তা ছোলা মুড়ি লিকার চা অথবা ছোলা আলু ভাজা অথবা ঘুঘনী মুড়ি অথবা ডিম সেদ্ধ কলা রুটি এই ধরনের কিছু হালকা খাবার।</li>
          <li>বেলা ৯:৩০ মিনিট থেকে ১০:৩০ মিনিটের মধ্যে ভাত অথবা খিচুড়ি দেওয়া হবে।</li>
          <li>জোহরবাদ দুপুরের খাবার সপ্তাহে চারদিন গোস্ত একদিন মাছ একদিন ডিম ও একদিন বিরিয়ানি। আসর বাদ মুড়ি রাত্রে যেকোনো দুটি তরকারির ব্যবস্থা থাকবে। শীতকালীন রাত্রে দুধের ব্যবস্থা থাকবে। তবে সময় সাপেক্ষে খাবারের নিয়ম পরিবর্তন হইতে পারে।</li>
          <li>সপ্তাহে দুদিন ছাত্রদের জামা কাপড় ধুইয়ে দেওয়ার ব্যবস্থা থাকিবে। </li>
          <li>আপনার সন্তানের সুস্থতা ও পরিষ্কার পরিচ্ছন্নতার দিকে কর্তৃপক্ষের বিশেষ খেয়াল থাকবে। </li>
          ( ইনশাল্লাহ)
         </ul>
        </div>
      </div>
      </div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Advisor to the Institute ',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'প্রতিষ্ঠানের উপদেষ্টা গন',
          1000
        ]}
        wrapper="h2"
        speed={40}
        className='type-text-more'
        repeat={Infinity}
        style={{ textAlign: "center", fontSize: "45px", color: "#ff0000" }}

      />

      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

    
      <div className="moreabout " style={{ display: "flex",justifyContent:"center", flexWrap: "wrap", backgroundColor: "#a0ffc5", gap: "20px", marginBottom: "10px",borderRadius:"15px" }}>
        <div className="targettext" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",padding:"15px",fontSize:"27px",fontWeight:"500" }}>
        রুপসোনা ইকরা মাদ্রাসা মিশনের উপদেষ্টা গন ।আলহাজ্ব মীর আসরাফ সাহেব ।সহ সেক্রেটারি সেহারাবাজার মাদ্রাসা । হাজী আব্দুল মান্নাফ সাহেব মেটিয়াবুরুজ । জনাব হাজী ইউনুস সাহেব মেটিয়াবুরুজ ।জনাব শেখ ইউসুফ সাহেব মেটিয়াবুরুজ জনাব হাজী শফিকুল সাহেব প্রতিষ্ঠাতা সারা গার্লসমিশন সেহারাবাজার। জনাব আনিস হাজারি বিনোদপুর । মরহুম শেখ নুরজামাল সাহেব রুপসোনা
        </div>
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
        wrapper="h2"
        speed={40}
        repeat={Infinity}
        style={{ textAlign: "center", fontSize: "45px", color: "#ff0000" }}

      />
      <div className="container" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", backgroundColor: "#a0ffc5", gap: "20px", marginBottom: "10px" }}>
        <div className="targettext" style={{ width: "509px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <b style={{ color: "#00a539", fontSize: "30px", textDecoration: "underline" }}>ভ্রমণ</b><span style={{ fontSize: "25px" }}>কলকাতা ভ্রমণ</span>
        </div>
        <div className="tergetpic">
          <img className="tpic" src={travell1} alt="" style={{ height: "280px", width: "400px" }} />
        </div>
      </div>
      <div className="container" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", backgroundColor: "#a0ffc5", gap: "20px", marginBottom: "10px" }}>
        <div className="targettext" style={{ width: "509px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <b style={{ color: "#00a539", fontSize: "30px", textDecoration: "underline" }}>ভ্রমণ</b><span style={{ fontSize: "25px" }}>বাঁকুড়া ভ্রমণ</span>
        </div>
        <div className="tergetpic">
          <img className="tpic" src={travell2} alt="" style={{ height: "280px", width: "400px" }} />
        </div>
      </div>
      
      <div className="container" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", backgroundColor: "#a0ffc5", gap: "20px", marginBottom: "10px" }}>
        <div className="targettext" style={{ width: "509px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <b style={{ color: "#00a539", fontSize: "30px", textDecoration: "underline" }}>ভ্রমণ</b><span style={{ fontSize: "25px" }}>হাজারদুয়ারি ভ্রমণ</span>
        </div>
        <div className="tergetpic">
          <img className="tpic" src={travell3} alt="" style={{ height: "280px", width: "400px" }} />
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
        wrapper="h2"
        speed={40}
        repeat={Infinity}
        style={{ textAlign: "center", fontSize: "45px", color: "#ff0000" }}

      />
      <div className="container" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", backgroundColor: "#a0ffc5", gap: "20px", marginBottom: "10px" }}>
        <div className="tergetpic" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: "30px", textAlign: "center", color: "#8032cd" }}>খাদ্য তালিকা</div>
          <img className="tpic" src={foodroutine} alt="" style={{ height: "280px", width: "400px" }} />
          <a href={foodroutine} download={foodroutine} style={{ textAlign: "center" }}><button className='btnfood'>Download food routine</button></a>
        </div>

        <div className="tergetpic" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: "30px", textAlign: "center", color: "#8032cd" }}>Meal space</div>
          <img className="tpic" src={mealpic} alt="" style={{ height: "280px", width: "400px" }} />
        </div>
      </div>
      <Footer/>
    </>
  )
}
