import { memo } from "react"

const StudentBox = ({value}) => {
    return (
        <div className="studentMain">
            <div className="forImg">
                <img src={value.img} alt="" />
            </div>
            <div className="forOther">
                <p className="nameClass"> <strong>Name : </strong> {value.name}</p>
                <p className="rollClass"> <strong>Class : </strong> {value.StudentClass}</p>
                <p className="aboutClass">
                    <strong>About : </strong>
                    {value.about}
                </p>
            </div>
        </div>
    )
}


export default memo(StudentBox)