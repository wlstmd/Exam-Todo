import React, { useRef, useState } from "react";
import "./TodoEditor.css";

function TodoEditor({ onCreate }) {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = () => {
    if (!content || !date) {
      inputRef.current.focus();
      return;
    }
    onCreate(content, date);
    setContent("");
    setDate("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>시험 과목 생성하기</h4>
      <div className="editor_wrapper">
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="2023-10-16"
              checked={date === "2023-10-16"}
              onChange={onChangeDate}
            />
            10월 16일
          </label>
          <label>
            <input
              type="radio"
              value="2023-10-17"
              checked={date === "2023-10-17"}
              onChange={onChangeDate}
            />
            10월 17일
          </label>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 과목..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}

export default TodoEditor;
