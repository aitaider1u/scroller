import React from 'react';
import {
  updatecurrentSearch,
} from "../../features/searchSlice";
import { useDispatch } from 'react-redux';

import {
  updateState
} from "./../../features/appSlice";
import { PageEnum } from "./../../utils/EnumApp";

function ItemSearchHistory({ text, onRemove , setFocused }) {
  const dispatch = useDispatch();
  
  const handleOnClick = () => {
    dispatch(updatecurrentSearch(text));
    dispatch(updateState(PageEnum.SEARCH))
    setFocused(false);
  }

  return (
    <div
        className="flex justify-between items-center p-2 border-b hover:bg-slate-200"
        onClick={handleOnClick}
        >
        <span className="text-sm">{text}</span>
        <button
          className="text-black-500 text-sm font-bold hover:opacity-75"
          onClick={(e) => {
            e.stopPropagation(); // Empêche la propagation vers le div parent
            onRemove();
          }}
        >
        X
      </button>
    </div>
  
  );
}

export default ItemSearchHistory;