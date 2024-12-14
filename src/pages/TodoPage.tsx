import React from "react";
import useFetchTodo from "../hooks/queries/useFetchTodo";
import { useParams } from "react-router-dom";
import TodoItem from "../components/todo/TodoItem";
import { ITodo } from "../interfaces/todo.interface";

const TodoPage: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetchTodo(id!);
  const { id: todoId, title, completed } = data || ({} as ITodo);

  if (error) return <h3>Error ...</h3>;
  if (isLoading) return <h3>Loading ...</h3>;

  return (
    <div>
      <TodoItem id={todoId} title={title} completed={completed} />
    </div>
  );
};

export default TodoPage;
