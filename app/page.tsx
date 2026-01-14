"use client";

import { useEffect, useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
    setText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-200 flex justify-center pt-20">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4 text-gray-400">My Day</h1>

        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Add a task"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-200"
            >
              <div
                onClick={() => toggleTodo(todo.id)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                  className="w-4 h-4"
                />
                <span
                  className={`${
                    todo.completed
                      ? "line-through text-gray-400"
                      : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => removeTodo(todo.id)}
                className="text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
