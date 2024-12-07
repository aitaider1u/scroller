import React, { useRef } from "react";

import SearchIcon from './../assets/search-icon.png'
import CleanIcon from './../assets/remove-icon.png'

function SearchBar() {
    const inputRef = useRef();

    const handleClearSearchBar = () => {
        inputRef.current.value = "";
    }

    return (
        <>
            <div  className='flex bg-teal-100 justify-center space-x-6 p-3  max-sm:space-x-2 max-sm:p-4 '>
                <img src={SearchIcon} alt="" className='max-sm:w-10 max-sm:h-10 w-12 h-12 bg-teal-300 p-2 rounded-md' />
                <div className="relative flex max-w-lg w-screen ">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="search...."
                        className=" rounded-md p-4 max-sm:h-10 h-12 w-full z-0"
                    />
                    <img 
                        onClick={handleClearSearchBar}
                        src={CleanIcon} 
                        alt="" 
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-6 hover:opacity-50 z-10"
                    />                
                </div>
                <button className='h-12 bg-teal-300 max-sm:hidden rounded-md text-center p-2'>Search</button>
            </div>
        </>
    )    
}
export default SearchBar; 