import { useQuery } from "@tanstack/react-query";
import { ITodo } from "../../../interfaces/todo.interface";
import fetchTodos from "../../../api/todo/fetchTodos";

const useFetchTodos = () => {
  const result = useQuery<ITodo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return result;
};

export default useFetchTodos;
