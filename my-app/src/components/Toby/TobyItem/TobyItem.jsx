import React, { useContext } from "react";
import { ContextToby } from "../../contextToby";
import "./TobyItem.scss";

export const TobyItem = (props) => {
  const { dispatch, setTodoTitle, setIsEdited, setTitleBeforeEdit } =
    useContext(ContextToby);

  return (
    <div className="todo__item">
      <div className="item__wrap">
        <div>
          <input
            id={props.id}
            className="item__checkbox"
            type="checkbox"
            checked={props.completed}
            onChange={() =>
              dispatch({
                type: "toggle",
                title: props.title,
              })
            }
          />
          <span
            className={
              props.completed || props.className ? "item__completed" : ""
            }
          >
            {props.point}. {props.title}
          </span>
        </div>

        <div>
          <span className="creating-date">{props.date}</span>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              setTodoTitle(props.title);
              setIsEdited(true);
              setTitleBeforeEdit(props.title);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={() => {
              dispatch({
                type: "remove",
                title: props.title,
              });
            }}
          >
            <i class="bi bi-trash-fill"></i>Delete
          </button>
        </div>
      </div>
    </div>
  );
};


