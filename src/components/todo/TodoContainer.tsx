
import { useGetTodosQuery } from "@/redux/api/api";
import TodoCard from "./TodoCard";
import AddTodoDialog from "./AddTodoDialog";
import TodoFilter from "./TodoFilter";

type Todo = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean,
  priority:string

};

const TodoContainer = () => {
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined, {pollingInterval:1000, refetchOnReconnect:true});
  console.log(todos)

  if (isLoading) {
    return <p>...Loading</p>;
  }

  if (isError) {
    return <p>...API not get</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoDialog />
        <TodoFilter />
      </div>
      <div className="bg-red-500 bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
        {todos?.data?.map((item:Todo) => (
            <TodoCard {...item} />
          ))}
        </div>
        {/* <div className="bg-white tex-2xl font-bold p-5 flex justify-center items-center rounded-md">
            <p>There is no Task pending</p>
          </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
