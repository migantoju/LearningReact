import React from "react";

const List = props => (
  <ul>
    {props.items.map((item, key) => (
      <li key={key} className={`${item.completed ? "completed" : "pending"}`}>
        {/* If the task is completed we assign the 
        .completed class otherwise .pending */}
        {item.task}

        <div className="actions">
          <span
            className={item.completed ? "hide" : "done"}
            onClick={() => props.markAsCompleted(item.id)}
          >
            <i className="fa fa-check" />
          </span>
          <span className="trash" onClick={() => props.removeTask(item.id)}>
            <i className="fa fa-trash" />
          </span>
        </div>
      </li>
    ))}
  </ul>
);

export default List;
