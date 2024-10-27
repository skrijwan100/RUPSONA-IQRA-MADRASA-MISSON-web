import React from 'react'
import AutoPlaySlider from './Slider';
import slid2 from "../Asset/slidepic1.jpeg"
import slid3 from "../Asset/slide2.jpg"
import slid4 from "../Asset/slide3.jpg"
import { TypeAnimation } from 'react-type-animation';
import stady1 from "../Asset/stady1.jpeg"
import stady2 from "../Asset/stady2.jpg"

import Footer from './Footer';


export default function Home() {
  const slides = [
    slid4,
    slid3,
    slid2,
  ];
  return (
    <>
      <div>
        <div className="fristbox" style={{ width: "100vw", backgroundColor: "#c0ffed", marginTop: "-5px", paddingBottom: "10px", marginBottom: "5px" }}>
          <div style={{ textAlign: "center", fontSize: "45px", color: "#ff4000" }}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'WELCOME EVERYONE !',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'স্বাগত সবাইকে !',
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
      <div>
        <AutoPlaySlider slides={slides} autoPlayInterval={4000} />
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Our purpose and Target ',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'প্রতিষ্ঠানের উদ্দেশ্য ও লক্ষ্য',
            1000
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          className='targe-text'
          style={{ textAlign: "center", fontSize: "45px", color: "#ff0000" }}

        />


        <div className="container" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", backgroundColor: "#a0ffc5", gap: "20px", marginBottom: "10px" }}>
          <div className="targettext" style={{ width: "509px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <b style={{ color: "#00a539", fontSize: "30px", textDecoration: "underline" }}>উদ্দেশ্য</b><span style={{ fontSize: "25px" }}>কুরআন ও হাদিসের জ্ঞান অর্জনের মাধ্যমে দ্বীনের আলো ছড়িয়ে দেওয়া এবং মৃত ব্যক্তিদের মাগফিরাত কামনা করা।  আল্লাহ পাকের সন্তোষটি এবং মুহাম্মদ (সাঃ)এর শাফায়াত অর্জন করা।</span>
          </div>
          <div className="tergetpic">
            <img className="tpic" src={stady1} alt="" style={{ height: "280px", width: "400px" }} />
          </div>
        </div>

        <div className="container " style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", backgroundColor: "#a0ffc5", gap: "20px", marginBottom: "10px" }}>
          <div className="targettext" style={{ width: "509px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <b style={{ color: "#00a539", fontSize: "30px", textDecoration: "underline" }}>লক্ষ্য</b><span style={{ fontSize: "25px" }}> কুরআন ও সুন্নাহর আলোকে শিক্ষার্থীকে যুগোপযোগী আন্তর্জাতিক মানসম্পন্ন চরিত্রবান হাফেজ ও কারি এবং তৎসহ জেনারেল শিক্ষা অর্জনের মাধ্যমে ছাত্রদের প্রতিষ্ঠিত করানোর চেষ্টা করা।</span>
          </div>
          <div className="tergetpic">
            <img className="tpic" src={stady2} alt="" style={{ height: "280px", width: "400px" }} />
          </div>
        </div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Why us ?',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'আমরা কেন ?',
            1000
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          style={{ textAlign: "center", fontSize: "45px", color: "red" }}

        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>


          <div className="whyread" style={{ height: "270px", borderRadius: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "30px" }}>
            <div className="head" style={{ fontSize: "37px", padding: "16px" }}>
              কেন আপনার সন্তানকে এই প্রতিষ্ঠানে ভর্তি করবেন?
            </div>
            <div className="why-text" style={{ fontSize: "25px", padding: "16px", fontWeight: "500", color: "#ff3333" }}>
              দক্ষিণ দামোদরের মধ্যে একমাত্র প্রতিষ্ঠান যেখানে জেনারেল শিক্ষার সঙ্গে তিন বছরের মধ্যে পূর্ণ হাফেজ কুরআন হওয়ার সুব্যবস্থা রয়েছে ।

            </div>
          </div>
        </div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Our Service',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'এক নজরে আমরা পরিষেবা গুলি',
            1000
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          className='Service-text'
          style={{ textAlign: "center", fontSize: "45px", color: "red", marginBottom: "30px" }}

        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>


          <div className="whyread" style={{ height: "270px", borderRadius: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "30px" }}>
            <div className="head" style={{ fontSize: "25px", padding: "20px", color: "#0c0cff" }}>
              প্রাথমিক চিকিৎসা , পাঁচবার খাওয়া ,  পোশাকের ব্যবস্থা , জামাকাপড় ও বিছানা চাদর ধোয়ার ব্যবস্থা, খাবার পর থালা বাটি ধুয়ে দেবার ব্যবস্থা, রুমে ঝাড়ু ব্যবস্থা , শীতকালীন গরম পানি ব্যবস্থা , গ্রীষ্মকালে এসির ব্যবস্থা , বছরে দুবার বাহিরে ভ্রমণের ব্যবস্থা , এছাড়াও নিত্য প্রয়োজনীয় কিছু জিনিস যেমন বালতি মগ পানির বোতল সাবান কোলগেট ব্রাশ শোয়ার  জন্য খাট গদি বালিশ ব্লাঙ্কেট বিছানা চাদর মশারি ইত্যাদি।
            </div>

          </div>
        </div>
        <div className="keyservice" style={{ display: "flex", marginTop: "27px", justifyContent: "space-around", flexWrap: "wrap", gap: "30px" }}>
          <div className="point1">সিসিটিভি</div>
          <div className="point1">ওয়াশিং মেশিন</div>
          <div className="point1"> কম্পিউটার </div>
          <div className="point1">ফ্রিজ </div>
          <div className="point1">এসি </div>
          <div className="point1">ওয়াটার ফিল্টার</div>
          <div className="point1">গিজার</div>
        </div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Institutional reading system',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'প্রতিষ্ঠানের পঠন পাঠন ব্যবস্থা',
            1000
          ]}
          wrapper="h2"
          speed={40}
          className='system-text'
          repeat={Infinity}
          style={{ textAlign: "center", fontSize: "42px", color: "red" }} />
        <div className="mainbox" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "20px" }}>
          <div className="box1">
            <div className="header-text" style={{ fontSize: "35px", textAlign: "center", backgroundColor: "#78dafa" }}>মাদ্রাসা বিভাগ
            </div>
            <ul style={{ fontSize: "28px" }}>
              <li style={{ marginBottom: "15px" }}> নূরানী বিভাগ </li>
              <li style={{ marginBottom: "15px" }}>নাজেরা বিভাগ</li>
              <li style={{ marginBottom: "15px" }}>হেফ্জ বিভাগ</li>
              <li style={{ marginBottom: "15px" }}>ক্বেরাত বিভাগ</li>
            </ul>
          </div>
          <div className="box1">
            <div className="header-text" style={{ fontSize: "35px", textAlign: "center", backgroundColor: "#78dafa" }}>জেনারেল বিভাগ
            </div>
            <div style={{ textAlign: "center", fontSize: "35px" }}>
              Class
            </div>
            <ul style={{ fontSize: "20px" }}>
              <li>III</li>
              <li>IV</li>
              <li>V</li>
              <li>VI</li>
              <li>VII</li>
              <li>VIII</li>
              <li>IX</li>
              <li>X</li>
            </ul>

          </div>
        </div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Responsibility of parents',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'অভিভাবকদের দায়িত্ব',
            1000
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          className='type-parents'
          style={{ textAlign: "center", fontSize: "45px", color: "red" }}

        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>


          <div className="whyread" style={{ height: "270px", borderRadius: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "30px", marginBottom: "20px" }}>
            <ul style={{ fontSize: "20px" }}>
              <li> বছরে ৩০ দিনের বেশি ছুটি না নেওয়া রমজান মাসে ১০ দিন কুরবানীতে ৫ দিন স্কুলের ফাইনাল পরীক্ষার পর ৫ দিন এবং বিশেষ প্রয়োজনে ১০ দিনের বেশি ছুটি দেওয়া যাবে না। </li>
              <li>প্রতি মাসে বেতন বাবদ ধার্য টাকা মাসের ১ থেকে ১০ তারিখের মধ্যে দিতে হবে।</li>
              <li>প্রতিষ্ঠানে নির্ধারিত পোশাকের খরচ প্রতিষ্ঠান বহন করিবে।</li>
              <li>প্রত্যেক নতুন বছরে নতুন করে ভর্তি হতে হবে তবে পুরাতন ছাত্রদের ভর্তি ফি কম থাকিবে ।</li>
            </ul>
          </div>
        </div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Special Notice !',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'বিশষ বিজ্ঞপ্তি',
            1000
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          style={{ textAlign: "center", fontSize: "45px", color: "red" }}

        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>


          <div className="Special-text" style={{ height: "270px", borderRadius: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "30px", marginBottom: "20px" }}>
            <ul style={{ fontSize: "20px" }}>
              <li> আপনাদের সন্তান যদি খুব চঞ্চল হয় অথবা বুদ্ধি কম হয় যা আমাদের আয়ত্তের বাইরে তাহলে কর্তৃপক্ষ আপনার সন্তানকে আপনার কাছে ফিরিয়ে দিতে পারে।</li>
              <li>সমস্ত অভিভাবকদের কাছে অনুরোধ সন্তান মুখে কোন অভিযোগ শুনে কর্তৃপক্ষের সঙ্গে যোগাযোগ না করে কোন রকম মন্তব্য বা পদক্ষেপ না নেওয়া।</li>
              <li>সাধারণ অবস্থায় অভিভাবকগণ সন্তানদের সঙ্গে কেবলমাত্র মাসে একবার যে কোন বৃহস্পতিবার আসর হইতে মাগরিব পর্যন্ত অথবা শুক্রবার সকাল ৭ টা হইতে বেলা ১১ টা পর্যন্ত দেখা করিতে পারিবেন।</li>
              <li>প্রতিষ্ঠানের তরফ হইতে যে কদিন ছুটি দেওয়া হইবে ছুটি শেষে আসার যে নির্দিষ্ট সময় থাকিবে ওই সময়ের মধ্যে আসতে হবে।</li>
              <li>ভর্তির কোন চলে গেলে প্রদত্ত ফিজ ফেরত যোগ্য নয়।</li>
              <li>বিশেষ অসুবিধার ক্ষেত্রে কর্তৃপক্ষের সঙ্গে যোগাযোগ করুন।</li>
            </ul>
          </div>
        </div>
       <Footer/>
      </div>
    </>
  )
}
