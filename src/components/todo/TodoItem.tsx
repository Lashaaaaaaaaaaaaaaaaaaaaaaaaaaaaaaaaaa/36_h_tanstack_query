import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import useDeleteTodo from "../../hooks/mutations/todo/useDeleteTodo";

interface TodoItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  description,
}) => {
  const { mutate } = useDeleteTodo();
  const navigate = useNavigate();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    mutate(id);
  };

  return (
    <div
      onClick={() => navigate(`/todos/${id}`)}
      key={id}
      className="border border-gray-400 cursor-pointer relative"
    >
      <h3>{title}</h3>
      <h3 className="text-red-600">{completed ? "done" : "pending"}</h3>
      <p className="text-amber-700">{description}</p>

      <button
        onClick={(e) => handleDelete(e, id)}
        className="absolute p-2 text-red-900 top-1 right-1 border border-gray-300"
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
