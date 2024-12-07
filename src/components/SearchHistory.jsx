import React, { useState } from 'react';
import ItemSearchHistory from './ItemSearchHistory';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromHistoryResearches} from './../features/searchSlice';

function SearchHistory() {

  const historyResearches = useSelector((state) => {
    const result = [...state.search.historyResearches];
    return result.reverse();
});



  const dispatch = useDispatch();
  const handleRemove = (word) => {
    dispatch(removeFromHistoryResearches(word))
  };

  return (
    <div className="absolute flex flex-col top-full w-full rounded-md mt-1 bg-slate-100 overflow-auto p-4 h-auto max-sm:max-h-[300px] max-h-[500px]">
      {historyResearches.length === 0 ? (
        <div className="text-center max-sm:text-sm text-gray">No search history</div>
      ) : (
        historyResearches.map((item, index) => (
          <ItemSearchHistory
            key={index}
            text={item}
            onRemove={() => handleRemove(item)}
          />
        ))
      )}
    </div>
  );
}

export default SearchHistory;
