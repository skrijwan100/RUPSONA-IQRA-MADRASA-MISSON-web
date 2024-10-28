import React from 'react'
import founder from "../Asset/teacher/founder-pic.jpg"
import teacher1 from "../Asset/teacher/afzal.jpg"
import teacher2 from "../Asset/teacher/shahnawaz.jpg"
import teacher3 from "../Asset/teacher/siddik.jpg"
import teacher4 from "../Asset/teacher/dula.jpg"
import teacher5 from "../Asset/teacher/smaim.jpg"
import teacher6 from "../Asset/teacher/bittu.jpg"

export default function Acadamic() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial" }}>
        <div className="founder" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <img src={founder} alt="" style={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "50%", padding: "10px" }} />
          <div className="founder-text" style={{ display: "flex", flexDirection: "column", padding: "15px" }}>
            <div style={{ fontSize: "35px", textAlign: "center", color: "red" }}> <b>Founder of this Institution.</b> </div>
            <div style={{ fontSize: "30px", textAlign: "center" }}><b>Name:</b>HAZI ANSAR ALI SHAH</div>
            <div style={{ fontSize: "20px", textAlign: "center" }}> <b>বক্তব্য:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam obcaecati quia vel dolorum quos doloremque tenetur voluptate reiciendis nostrum eaque.</div>
          </div>
        </div>
      </div>
      <div className="main-teacher" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "35px", marginBottom: "20px", alignItems: "center", justifyContent: "space-around" }}>
        <div className="teacher-box">
          <img src={teacher1} alt="" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px" ,display:"flex", flexDirection:"column",gap:"10px"  }}>
             <div className='text-center'><b>Nmae:</b>Afzal Mallick <br /> </div>
             <div className='text-center'><b>Post:</b>Hostal super , Teacher <br /></div>
             <div className='text-center'><b>Qulalification:</b> Hafez</div>
          </div>
        </div>
        <div className="teacher-box">
          <img src={teacher2} alt="" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Nmae:</b>Moulana Shahnawaz Mazahiri <br/></div> 
           <div className='text-center'><b>Post:</b>Assistant Teacher <br/></div> 
           <div className='text-center'><b>Qulalification:</b> Hafez and Kazi</div> 
          </div>
        </div>
        <div className="teacher-box">
          <img src={teacher3} alt="" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Nmae:</b>Moulana Siddik Miftahi <br/></div>
           <div className='text-center'><b>Post:</b>Assistant Teacher <br/></div>
           <div className='text-center'><b>Qulalification:</b> Hafez and Kazi</div>
          </div>
        </div>
        <div className="teacher-box">
          <img src={teacher4} alt="" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Nmae:</b>Sk Dulal <br/></div>
           <div className='text-center'><b>Post:</b>Assistant Teacher <br/></div>
           <div className='text-center'><b>Qulalification:</b> B.A(Hons-GEO.), M.A , D.EL.ED , B.ED</div>
          </div>
        </div>
        <div className="teacher-box">
          <img src={teacher5} alt="" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Nmae:</b>Munshi Samim Nawaz <br/> </div> 
           <div className='text-center'><b>Post:</b>Assistant Teacher <br/></div>
           <div className='text-center'><b>Qulalification:</b> B.A (Hons-Eng.) , M.A</div> 
          </div>
        </div>
        <div className="teacher-box">
          <img src={teacher6} alt="" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
          <div className="d-text" style={{ width: "320px",display:"flex", flexDirection:"column",gap:"10px" }}>
           <div className='text-center'><b>Nmae:</b>SK Parvej Musaraf Hossen <br/></div> 
           <div className='text-center'><b>Post:</b> Assistant Teacher <br/></div> 
           <div className='text-center'><b>Qulalification:</b> Puer science , Diploma in computer</div> 
          </div>
        </div>
      </div>
    </>
  )
}
