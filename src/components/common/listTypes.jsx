import React from "react";

const ListTypes = props => {
  const { items, handleDollTypeSelect, selectedItem } = props;

  return (
    <div>
      <ul className="list-group">
        {items.map(type => (
          <li
            key={type._id}
            className={
              type === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleDollTypeSelect(type)}
            style={{ cursor: "pointer" }}
          >
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTypes;
