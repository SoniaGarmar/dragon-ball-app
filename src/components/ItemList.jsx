import React from 'react';

function ItemList({
  items,
  renderItem,
  isLoading,
  error,
  searchAttempted,
  noItemsFoundMessage = "No items found matching your criteria.",
  initialMessage = "Use the form above to search for items."
}) {
  if (isLoading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-8">{error}</p>;
  }

  if (items.length > 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 mb-8">
        {items.map(item => renderItem(item))}
      </div>
    );
  }
  
  if (searchAttempted) {
      return <p className="text-center text-xl mt-8">{noItemsFoundMessage}</p>;
  }

  return (
    <p className="text-center text-xl mt-8">
      {initialMessage}
    </p>
  );
}

export default ItemList;
