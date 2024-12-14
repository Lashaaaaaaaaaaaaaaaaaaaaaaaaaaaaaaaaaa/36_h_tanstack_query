import React from "react";
import useFetchTodos from "../hooks/queries/useFetchTodos";
import TodoList from "../components/todo/TodoList";

const TodosPage: React.FC = () => {
  const { data: todos, error, isLoading } = useFetchTodos();

  if (error) return <h3>Error ...</h3>;
  if (isLoading) return <h3>Loading ...</h3>;

  return <TodoList todos={todos} />;
};

export default TodosPage;
