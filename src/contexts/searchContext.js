import { createContext, useContext, useState } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = ({ children }) => {
    const [searchQu, setsearchQu] = useState(null)
    return (
        <SearchContext.Provider value={[searchQu, setsearchQu]}>
            {children}
        </SearchContext.Provider>
    )
}
export default SearchContextProvider

export function useSearch() {
    return useContext(SearchContext)
}