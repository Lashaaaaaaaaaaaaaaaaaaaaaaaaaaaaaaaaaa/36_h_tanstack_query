import React from "react";
import { useNavigate } from "react-router-dom";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/todos/${id}`)}
      key={id}
      className="border border-gray-400 cursor-pointer"
    >
      <h3>{title}</h3>
      <h3 className="text-red-600">{completed ? "done" : "pending"}</h3>
    </div>
  );
};

export default TodoItem;