import React, { useState } from "react";

const ButtonGrid = ({ items, renderItem }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <>
      {items.map((item, idx) =>
        renderItem({
          item,
          isSelected: selectedItemIndex === idx,
          select: () => setSelectedItemIndex(idx)
        })
      )}
    </>
  );
};

export default ButtonGrid;
