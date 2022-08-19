import React, { useEffect, useState } from "react";
import { ButtonComponent } from "react-button-plugin";
function TodoLIst() {
  const [todo, setTodo] = useState([]);
  const [ipValue, setIpValue] = useState("");

  async function fetchTodoList() {
    const response = await fetch("/api/todos", { method: "GET" });
    const res = await response.json();
    const data = await res.todo;
    setTodo(data);
    return data;
  }
  useEffect(() => {
    fetchTodoList();
  }, []);

  async function addTodos() {
    if (!ipValue) return;
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ name: ipValue }),
    });
    const json = await res.json();
    setTodo([...todo, json.todo]);
    setIpValue("");
  }

  console.log("todo", todo);
  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          value={ipValue}
          onChange={(e) => setIpValue(e.target.value)}
        />
        <ButtonComponent type="primary" size="l" onClick={addTodos}>
          Add
        </ButtonComponent>
      </div>
      <ul>
        {todo.length > 0 && todo.map((el) => <li key={el.id}>{el.name}</li>)}
      </ul>
    </div>
  );
}

export default TodoLIst;
