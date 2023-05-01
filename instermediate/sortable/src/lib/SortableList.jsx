import React, { useCallback, useState } from "react";
import SortableListItem from "./SortableListItem";
import "./SortableList.css";

export default function SortableList({
  data,
  onDropItem,
  onClickItem,
  renderItem,
}) {
  const [startIdx, setStartIdx] = useState(0);
  const [listData, setListData] = useState(data);

  const onDragStart = (idx) => setStartIdx(idx);
  const onDrop = useCallback(
    (dropIdx) => {
      const dragItem = listData[startIdx];
      const list = [...listData];
      list.splice(startIdx, 1);
      const newListData =
        startIdx < dropIdx
          ? [
              ...list.slice(0, dropIdx - 1),
              dragItem,
              ...list.slice(dropIdx - 1),
            ]
          : [...list.slice(0, dropIdx), dragItem, ...list.slice(dropIdx)];
      setListData(newListData);
      onDropItem(newListData);
    },
    [listData, onDropItem, startIdx]
  );

  return (
    <ul className="sortable-list">
      {listData.map((item, idx) => (
        <SortableListItem
          key={idx}
          index={idx}
          draggable={true}
          onDropItem={onDrop}
          onDragStart={onDragStart}
          onClickItem={onClickItem}
        >
          {renderItem(item, idx)}
        </SortableListItem>
      ))}
      <SortableListItem
        key={listData.length}
        index={listData.length}
        draggable={false}
        onDropItem={onDrop}
      />
    </ul>
  );
}
