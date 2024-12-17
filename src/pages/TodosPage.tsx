import React, { Fragment } from "react";
import useFetchTodos from "../hooks/queries/todo/useFetchTodos";
import TodoList from "../components/todo/TodoList";
import CreateTodo from "../components/todo/CreateTodo";

const TodosPage: React.FC = () => {
  const { data: todos, error, isLoading } = useFetchTodos();

  if (error) return <h3>Error ...</h3>;
  if (isLoading) return <h3>Loading ...</h3>;

  return (
    <Fragment>
      <TodoList todos={todos} />
      <CreateTodo />
    </Fragment>
  );
};

export default TodosPage;
