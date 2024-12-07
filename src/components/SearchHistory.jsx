import React, { useState } from 'react';
import ItemSearchHistory from './ItemSearchHistory';

function SearchHistory() {


  const [history, setHistory] = useState(['Search 1', 'Search 2', 'Search 3','Search 1', 'Search 2', 'Search 3','Search 1', 'Search 2', 'Search 3','Search 1', 'Search 2', 'Search 3','Search 1', 'Search 2', 'Search 3','Search 1', 'Search 2', 'Search 3']);

  const handleRemove = (index) => {
    setHistory((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="absolute flex flex-col top-full w-full rounded-md mt-1 bg-slate-100 overflow-auto p-4 h-auto max-sm:max-h-[300px] max-h-[500px]">
      {history.length === 0 ? (
        <div className="text-center text-gray">No search history</div>
      ) : (
        history.map((item, index) => (
          <ItemSearchHistory
            key={index}
            text={item}
            onRemove={() => handleRemove(index)}
          />
        ))
      )}
    </div>
  );
}

export default SearchHistory;
