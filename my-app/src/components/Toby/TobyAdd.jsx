import React, { useState, useEffect, useReducer } from "react";
import { ContextToby } from "../contextToby.js";
import { Button } from "reactstrap";
import { TobyList} from "./TobyList/TobyList";
import Reducer from "../../Reducer.js";
import "./TobyAdd.scss";

const deadLine = 5000;

export const TobyAdd = () => {

  const [state, dispatch] = useReducer(
    Reducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [todoTitle, setTodoTitle] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [titleBeforeEdit, setTitleBeforeEdit] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const checkDeadline = setInterval(() => {
      if (state.length === 0) return;
      const deadlineElem = state.find(
        (item) =>
          new Date().getTime() - item.deadLineTime >= deadLine && !item.completed && !item.className
      );

      if (deadlineElem) {
        const index = state.findIndex(
          (item) => item.title === deadlineElem.title
        );

        state.splice(index, 1, {
          id: deadlineElem.id,
          title: deadlineElem.title,
          className: "item__completed",
          date: deadlineElem.date,
          deadLineTime: deadlineElem.deadLineTime,
          completed: deadlineElem.completed,
        });
        localStorage.setItem("todos", JSON.stringify(state));
      }
    }, 1000);
    return () => {
      clearInterval(checkDeadline);
    }
  }, [state]);

  const addTodoItemOnClick = () => {
    if (!todoTitle) return;
    dispatch({
      type: "add-edit",
      title: todoTitle,
      edited: isEdited,
      titleBefore: titleBeforeEdit,
    });
    setTodoTitle("");
    setIsEdited(false);
  };

  return (
    <ContextToby.Provider
      value={{ dispatch, setTodoTitle, setIsEdited, setTitleBeforeEdit }}
    >
      <div className="app-container">
        <h1>My shopping list</h1>
        <div className="input-field">
          <label className="input-label" htmlFor="input-task">
            add purchase
          </label>

          <input
            type="text"
            name="task"
            value={todoTitle}
            onChange={(event) => {
              setTodoTitle(event.target.value);
            }}
          />
        </div>

        <Button
          className="input-button"
          color="primary"
          onClick={addTodoItemOnClick}
        >
          {!isEdited ? "Add new task" : "Edit task"}
        </Button>

        <TobyList todos={state} />
      </div>
    </ContextToby.Provider>
  );
}

