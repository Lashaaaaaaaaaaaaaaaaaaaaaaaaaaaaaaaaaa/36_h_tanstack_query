import React from "react";

import { useParams } from "react-router-dom";
import TodoItem from "../components/todo/TodoItem";
import { ITodo } from "../interfaces/todo.interface";
import useFetchTodo from "../hooks/queries/todo/useFetchTodo";

const TodoPage: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetchTodo(id!);
  const { id: todoId, title, isCompleted, description } = data || ({} as ITodo);

  if (error) return <h3>Error ...</h3>;
  if (isLoading) return <h3>Loading ...</h3>;

  return (
    <div>
      <TodoItem
        id={todoId}
        title={title}
        completed={isCompleted}
        description={description}
      />
    </div>
  );
};

export default TodoPage;
