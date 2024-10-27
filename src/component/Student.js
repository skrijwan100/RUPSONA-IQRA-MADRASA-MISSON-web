import SearchBar from './SearchBar';
import './student.css';
import StudentBox from './StudentBox';
import { details } from '../studentData/details';
import { useSearch } from '../contexts/searchContext';
import { TypeAnimation } from 'react-type-animation';
import { useMemo } from 'react';
const Student = () => {
  const [searchQu] = useSearch()

  const filteredName = useMemo(() => {
    if (!searchQu) return details; 
  
    return details.filter((data) =>
      data.name.toLowerCase().includes(searchQu.toLowerCase())
    );
  }, [searchQu]);

  return (
    <div className='student-component'>
      <div className="student-title">
        <TypeAnimation
         sequence={[
          // Same substring at the start will only be typed out once, initially
          'Our Best Students',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'আমাদের সেরা ছাত্র',
          2000,
         
        ]}
        wrapper="h1"
        speed={50}
        repeat={Infinity}/>
        <SearchBar />
      </div>
      <div className="student-show">
        {
          filteredName.map((v, i) => (
            <StudentBox key={i} value={v} />
          ))
        }
      </div>
    </div>
  )
}


export default Student