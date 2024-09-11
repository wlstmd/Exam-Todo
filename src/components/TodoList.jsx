import React, { useMemo, useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList({ todo, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((item) =>
          item.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((item) => item.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>과목 리스트 📋</h4>
      <div>
        <div>
          <strong>총 과목 개수: {totalCount}</strong>
        </div>
        <div>
          <strong>완료된 과목: {doneCount}</strong>
        </div>
        <div>
          <strong>미완료된 과목: {notDoneCount}</strong>
        </div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="과목명을 입력하세요."
      />
      <div className="list_wrapper">
        {getSearchResult().map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
