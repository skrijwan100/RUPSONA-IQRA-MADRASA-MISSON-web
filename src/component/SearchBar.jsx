import { useState } from "react"
import { useSearch } from "../contexts/searchContext"

const SearchBar = () => {
    const [searchD, setSearchD] = useState("")
    const [, setsearchQu] = useSearch()

    const searchFun = (e) => {
        const newValue = e.target.value;
        setSearchD(newValue);
        setsearchQu(newValue);
    };
    return (
        <div className="searchBox">
            <input value={searchD} onChange={searchFun} type="search" placeholder='Search' />
        </div>
    )
}

export default SearchBar