import React from "react";
import "./TodoItem.css";

function TodoItem({ id, content, createdDate, isDone, onUpdate, onDelete }) {
  console.log(`${id} render!`);
  const onChaangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChaangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      {isDone ? (
        <div className="title_col_done">{content}</div>
      ) : (
        <div className="title_col_undone">{content}</div>
      )}
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
}

export default React.memo(TodoItem);
