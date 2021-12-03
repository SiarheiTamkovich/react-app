import React from "react";
import { TobyItem } from "../TobyItem/TobyItem";

export const TobyList = (props) => {
  return (
    <div className="todo__list">
      <div className="list__container">
        {props.todos.map((item, i) => (
          <TobyItem key={item.id} point={i + 1} {...item} />
        ))}
      </div>
    </div>
  );
};

