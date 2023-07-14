import React from "react";
import Item from "./Item.jsx";

function ItemList(props) {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <Item text={item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
