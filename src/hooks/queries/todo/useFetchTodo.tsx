import { useQuery } from "@tanstack/react-query";
import { ITodo } from "../../../interfaces/todo.interface";
import fetchTodo from "../../../api/todo/fetchTodo";

const useFetchTodo = (id: any) => {
  const result = useQuery<ITodo>({
    queryKey: ["todo"],
    queryFn: () => fetchTodo(id),
  });

  return result;
};

export default useFetchTodo;
