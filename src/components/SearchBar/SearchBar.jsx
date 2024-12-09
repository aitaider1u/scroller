import React, { useRef } from "react";
import SearchIcon from "./../../assets/search-icon.png";
import CleanIcon from "./../../assets/remove-icon.png";
import SearchHistory from "./SearchHistory";
import LikeCounter from "./../../layouts/LikeCounter";

import {
  updatecurrentSearch,
  addToHistoryResearches
} from "./../../features/searchSlice";
import { useSelector, useDispatch } from "react-redux";

import {
  updateState
} from "./../../features/appSlice";
import { PageEnum } from "../../utils/EnumApp";

function SearchBar() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const currentSearch = useSelector((state) => state.search.currentSearch);

  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);

  const handleClearSearchBar = () => {
    inputRef.current.value = "";
  };

  const handleClickOutside = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFocused(false);
    }
  };

  const handeSearchButton = () => {
    const keyworld = inputRef.current.value;

    if (keyworld.length > 0) {
      dispatch(addToHistoryResearches(keyworld.trim()));
      dispatch(updatecurrentSearch(keyworld.trim()));
      handleChangeAppState(PageEnum.SEARCH)
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handeSearchButton()
      handleChangeAppState(PageEnum.SEARCH)
      setFocused(false);

    }
  };

  const handleChangeAppState = (newState) => {
    dispatch(updateState(newState))
  }


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
          className="max-sm:w-10 max-sm:h-10 w-12 h-12 bg-teal-200 p-2 rounded-md"
          onClick={() => handleChangeAppState(PageEnum.HOME)}
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
          {focused && <SearchHistory     setFocused={setFocused} />}
        </div>
        <button
          onClick={handeSearchButton}
          className="h-12 bg-teal-200 max-md:hidden rounded-md text-center p-2"
        >
          Search
        </button>
        <div>
          <LikeCounter></LikeCounter>
        </div>

      </div>
    </>
  );
}

export default SearchBar;
