import React, { useRef } from "react";
import SearchIcon from "./../assets/search-icon.png";
import CleanIcon from "./../assets/remove-icon.png";
import SearchHistory from "./SearchHistory";
import { addToHistoryResearches,updatecurrentSearch} from './../features/searchSlice';
import { useSelector, useDispatch } from 'react-redux';


function SearchBar() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const currentSearch = useSelector((state) => state.search.currentSearch);

  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);

  const handleClearSearchBar = () => {
    inputRef.current.value = "";
  };

  // Empêcher la fermeture si on clique dans SearchHistory ou les enfants
  const handleClickOutside = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFocused(false);
    }
  };

  const handeSearchButton =  () => {
    const keyworld = inputRef.current.value;

    if(keyworld.length > 0){
      dispatch(addToHistoryResearches(keyworld.trim()))
      dispatch(updatecurrentSearch(keyworld.trim()))
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handeSearchButton()
    }
  };

  return (
    <>
      <div
        onBlur={handleClickOutside}
        tabIndex={-1} // Pour permettre onBlur sans input focus
        className="flex bg-teal-100 justify-center space-x-6 p-3 max-sm:space-x-2 max-sm:p-4"
      >
        <img
          src={SearchIcon}
          alt=""
          className="max-sm:w-10 max-sm:h-10 w-12 h-12 bg-teal-300 p-2 rounded-md"
        />
        <div className="relative flex max-w-lg w-screen">
          <input
            onFocus={onFocus}
            ref={inputRef}
            type="text"
            placeholder="search...."
            className="rounded-md p-4 max-sm:h-10 h-12 w-full z-0 bg-slate-50"
            onKeyDown={handleKeyDown}
          />
          <img
            onClick={handleClearSearchBar}
            src={CleanIcon}
            alt=""
            className="absolute right-4 top-1/2 -translate-y-1/2 h-6 hover:opacity-50 z-10"
          />
          {focused && <SearchHistory />}
        </div>
        <button onClick={handeSearchButton} className="h-12 bg-teal-300 max-sm:hidden rounded-md text-center p-2">
          Search
        </button>
      </div>
      <p> toto : {currentSearch}</p>
    </>
    
  );
}

export default SearchBar;
