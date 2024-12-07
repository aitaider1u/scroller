import React from 'react';

function ItemSearchHistory({ text, onRemove }) {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span className="text-sm">{text}</span>
      <button
        className="text-black-500 text-sm font-bold hover:opacity-75"
        onClick={onRemove}
      >
        X
      </button>
    </div>
  );
}

export default ItemSearchHistory;