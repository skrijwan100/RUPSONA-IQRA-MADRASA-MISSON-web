import React from 'react'
import founder from "../Asset/teacher/founder-pic.jpg"
import teacher1 from "../Asset/teacher/afzal.jpg"
import teacher2 from "../Asset/teacher/newteacher1.jpeg"
import newteacher2 from "../Asset/teacher/newteacher2.jpeg"
import teacher3 from "../Asset/teacher/newteacher3.jpeg"
import teacher4 from "../Asset/teacher/dula.jpg"
import teacher5 from "../Asset/teacher/smaim.jpg"
import nonteacher1 from "../Asset/teacher/nonteacher1.jpg"
import nonteacher2 from "../Asset/teacher/nonteacher2.jpg"
import nonteacher3 from "../Asset/teacher/nonteacher3.jpg"
import newteacher4 from "../Asset/teacher/newtaecher4.jpeg"

export default function Acadamic() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial" }}>
        <div className="founder" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <img src={founder} alt="" style={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "50%", padding: "10px" }} />
          <div className="founder-text" style={{ display: "flex", flexDirection: "column", padding: "15px" }}>
            <div style={{ fontSize: "35px", textAlign: "center", color: "red" }}> <b>Founder of this Institution.</b> </div>
            <div style={{ fontSize: "30px", textAlign: "center" }}><b>Name:</b> ALHAJ HAFEZ ANSAR ALI SHAH</div>
            <div style={{ fontSize: "20px", textAlign: "center" }}> <b>বক্তব্য:</b> আসসালামুআলাইকুম ওয়ারাহমাতুল্লাহি ওয়াবারাকাতুহ । রূপসনা ইকরা মাদ্রাসা মিশনের পক্ষ থেকে আমি আলহাজ্ব হাফেজ আনসার আলি শাহ এই প্রতিষ্ঠানের প্রতিষ্ঠাতা ও পরিচালক। আপনাদের সকলকে জানাই স্বাগতম । এই প্রতিষ্ঠান করার পূর্বে আমিও কোন মাদ্রাসায় পড়াশোনা করেছি । পড়াশোনা কালীন যে প্রয়োজনীয়তা টা দেখতে পেয়েছি। সেটা হল মাদ্রাসা শিক্ষার সঙ্গে সঙ্গে বাংলা , ইংরেজি শিক্ষার প্রয়োজনীয়তা, সেই প্রয়োজনকে সামনে রেখে এই প্রতিষ্ঠান করা । এই প্রতিষ্ঠানে বাংলা ইংরেজি শিক্ষার সঙ্গে সঙ্গে একই সময়ে তিন বছরের মধ্যে 6 থেকে 12 বছরের বাচ্চাকে, হাফিজ ও প্রাথমিক মসলা-মাসায়েল শিক্ষার সুব্যবস্থা রহিয়াছে। অতএব আপনি আপনার সন্তানের মূল্যবান সময়কে কাজে লাগানোর জন্য আমার এই প্রতিষ্ঠানে ভর্তি করার আবেদন রইল। উপরোক্ত পরিষেবা ও ব্যবস্থাপনার ফলাফল স্বরূপ আমার এই প্রতিষ্ঠানে আড়াই বছর থেকে তিন বৎসরের মধ্যে সাত টি ছেলে কোরআনে হাফেজ সম্পূর্ণ করেছে।</div>
          </div>
        </div>
      </div>
      <div className="main-teacher" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "35px", marginBottom: "20px", alignItems: "center", justifyContent: "space-around" }}>
        <div className="teacher-box">
          <img src={teacher1} alt="Campas" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px" ,display:"flex", flexDirection:"column",gap:"10px"  }}>
             <div className='text-center'><b>Name:</b> Afzal Mallick <br /> </div>
             <div className='text-center'><b>Post:</b> hostel super , Teacher <br /></div>
             <div className='text-center'><b>Qulalification:</b> Hafez</div>
          </div>
        </div>
        <div className="teacher-box">
          <img src={teacher2} alt="Campas" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Name:</b> Abdur Rashid <br/></div> 
           <div className='text-center'><b>Post:</b> Assistant Teacher <br/></div> 
           <div className='text-center'><b>Qulalification:</b> Hafez and Kari</div> 
          </div>
        </div>
        <div className="teacher-box">
          <img src={teacher3} alt="Campas" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Name:</b>Abdus Salam <br/></div>
           <div className='text-center'><b>Post:</b> Assistant Teacher <br/></div>
           <div className='text-center'><b>Qulalification:</b> Hafez and Kari</div>
          </div>
        </div>
        <div className="teacher-box">
          <img src={newteacher2} alt="Campas" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Name:</b> Sk Riyajul Huda <br/></div>
           <div className='text-center'><b>Post:</b> Assistant Teacher <br/></div>
           <div className='text-center'><b>Qulalification:</b> Hafez</div>
          </div>
        </div>
        <div className="teacher-box">
          <img src={teacher4} alt="Campas" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Name:</b> SK Dulal <br/></div>
           <div className='text-center'><b>Post:</b> Assistant Teacher <br/></div>
           <div className='text-center'><b>Qulalification:</b> B.A(Hons-GEO.), M.A , D.EL.ED , B.ED</div>
          </div>
        </div>
        <div className="teacher-box">
          <img src={teacher5} alt="Campas" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Name:</b> Munshi Samim Nawaz <br/> </div> 
           <div className='text-center'><b>Post:</b> Assistant Teacher <br/></div>
           <div className='text-center'><b>Qulalification:</b> B.A (Hons-Eng.) , M.A</div> 
          </div>
        </div>
        <div className="teacher-box">
          <img src={newteacher4} alt="Campas" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Name:</b> Sk Saiful <br/></div> 
           <div className='text-center'><b>Post:</b> Assistant Teacher <br/></div> 
           <div className='text-center'><b>Qulalification:</b> Eng(Hons),M.A,B.ed</div> 
          </div>
        </div>
        <div className="teacher-box">
          <img src={nonteacher1} alt="Campas" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Name:</b> SK Jiyaul Rahaman <br/></div> 
           <div className='text-center'><b>Post:</b> Non teaching staff <br/></div> 
           <div className='text-center'><b>Qulalification:</b> class VIII</div> 
          </div>
        </div>
        <div className="teacher-box">
          <img src={nonteacher2} alt="Campas" style={{ height: "200px", width: "200px", borderRadius: "50%" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Name:</b> SK. Robiyel <br/></div> 
           <div className='text-center'><b>Post:</b> Non teaching staff<br/></div> 
           <div className='text-center'><b>Qulalification:</b> class VIII</div> 
          </div>
        </div>
        <div className="teacher-box">
          <img src={nonteacher3} alt="Campas" style={{ height: "200px", width: "200px", borderRadius: "50%"}} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Name:</b> SK Asraf Ali <br/></div> 
           <div className='text-center'><b>Post:</b> Non teaching staff <br/></div> 
           <div className='text-center'><b>Qulalification:</b> class VIII</div> 
          </div>
        </div>
      </div>
    </>
  )
}
